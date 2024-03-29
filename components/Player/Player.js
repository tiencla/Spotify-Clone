// import { VolumeUpIcon as VolumeDownIcon } from '@heroicons/react/24/outline';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { BackwardIcon, PauseIcon, PlayIcon, ForwardIcon, ArrowsRightLeftIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../../atoms/songAtom';
import useSpotify from '../../hooks/useSpotify';
import useSongInfo from '../../hooks/useSongInfo';
import {debounce} from 'lodash';

const Player = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();

  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);
  const songInfo = useSongInfo(currentTrackId);
  // console.log('songInfo --->', songInfo)

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        console.log('playing track --->', data.body?.item?.id);
        setCurrentTrackId(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        });
      });
    }
  };

  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body?.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [currentTrackId, spotifyApi, session]);

  //* Created this to delay the volume change to avoid executing too many request
  const debouncedAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((err) => {});
    }, 300),
    []
  );

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debouncedAdjustVolume(volume);
    }
  }, [volume]);

//   useEffect(() => {
//     if(volume > 0 && volume <= 100) {
//         spotifyApi.setVolume(volume) 
//     }
//   }, [volume]);

  return (
    <div className="h-24 bg-gradient-to-b from-gray-900 to-black text-white grid grid-cols-3 text-sm md:text-base px-2 md:px-8">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <img className="hidden md:inline h-12 w-12" src={songInfo?.album?.images?.[0].url} alt="" />
        <div>
          <h4>{songInfo?.name}</h4>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>

      {/* Center */}
      <div className="flex items-center justify-evenly">
        <ArrowsRightLeftIcon className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
        <BackwardIcon className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
        {isPlaying ? (
          <PauseIcon className="w-10 h-10 cursor-pointer hover:scale-125 transition transform duration-100 ease-out text-[#18D860]" onClick={handlePlayPause} />
        ) : (
          <PlayIcon className="w-10 h-10 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" onClick={handlePlayPause} />
        )}
        <ForwardIcon className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
        <ArrowUturnLeftIcon className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-3 md:space-x-4 justify-end p-5">
        <SpeakerWaveIcon className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" onClick={() => volume > 0 && setVolume(volume - 10)} />
        <input type="range" value={volume} onChange={(e) => setVolume(Number(e.target.value))} min={0} max={100} className="w-14 md:w-36 " />
        <SpeakerWaveIcon className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" onClick={() => volume < 100 && setVolume(volume + 10)} />
      </div>
    </div>
  );
};

export default Player;
