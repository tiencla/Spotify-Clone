import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { shuffle } from 'lodash';
import { useRecoilState } from 'recoil';
import { playlistIdState, playlistState } from '../../atoms/playlistAtom';
import useSpotify from '../../hooks/useSpotify';
import Songs from '../Songs/Songs';

const colors = [
  'bg-gradient-to-b from-green-500 to-black',
  'bg-gradient-to-b from-blue-500 to-black',
  'bg-gradient-to-b from-pink-500 to-black',
  'bg-gradient-to-b from-yellow-500 to-black',
  'bg-gradient-to-b from-purple-500 to-black',
  'bg-gradient-to-b from-red-500 to-black',
  // 'from-green-500',
  // 'from-blue-500',
  // 'from-pink-500',
  // 'from-yellow-500',
  // 'from-purple-500',
  // 'from-red-500',
];

const Center = () => {
  const { data: session } = useSession();
  // console.log('session --->', session)
  const spotifyApi = useSpotify();

  // const playlistId = useRecoilValue(playlistIdState); //* this is the same as the below line
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const [color, setColor] = useState('null');

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
        // console.log('data --->', data)
      })
      .catch((err) => console.log('Something went wrong --->', err));
  }, [spotifyApi, playlistId]);

  return (
    <div className="flex-grow text-white h-screen overflow-y-scroll scrollbar-hide">
    
      <header className="absolute top-5 right-6">
        <div className="flex items-center bg-[#2e2e2e] space-x-3 opacity-90 hover:opacity-75 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-6`}
      >
        <img
          className="h-40 w-40 shadow-2xl"
          src={playlist?.images?.[0]?.url}
          alt=""
        />
        <div>
        <p>Playlist</p>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold">{playlist?.name}</h1>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
};

export default Center;
