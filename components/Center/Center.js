import React, { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { ArrowLeftOnRectangleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
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
  const [color, setColor] = useState(null);
  const [isActive, setActive] = useState('false');


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

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="flex-grow text-white h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8" onClick={handleToggle}>
        <div className="flex items-center bg-[#2e2e2e] space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10 "
            src={session?.user.image}
            alt="user img"
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <div className={
          `h-10 w-52 rounded-sm bg-[#2e2e2e] text-white absolute right-8 top-[4.3rem] flex-col` +
          ' ' +
          `${isActive ? 'hidden' : 'flex'}`
        }>
          <div className="flex items-center justify-between cursor-pointer px-3 py-2"
          onClick={signOut}>
            <p className='hover:bg-[#2b2d30]'>Sign Out</p>
            <ArrowLeftOnRectangleIcon className='w-5 h-5'/>
          </div>
        </div>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white pl-6 pb-6 border-[.5px] border-gray-600`}
      >
        <img
          className="h-40 w-40 shadow-2xl"
          src={playlist?.images?.[0]?.url}
          alt="album img"
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
