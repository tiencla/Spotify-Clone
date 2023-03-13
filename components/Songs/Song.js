import React from 'react';
import { useRecoilState } from 'recoil';
import useSpotify from '../../hooks/useSpotify';
import { currentSongState, isPlayingState } from '../../atoms/songAtom';

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify();
  const imageUrl = track.track.album.images[0].url;
  const trackName = track.track.name;
  const artistsName = track.track.artists[0].name;
  const albumName = track.track.album.name;
  
  const [currentTrack, setCurrentTrack] = useRecoilState(currentSongState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    spotifyApi.play({ // play a song
      uris: [track.track.uri], // pass in the uri of the song
    });
    setCurrentTrack(track.track.uri);
    setIsPlaying(true);
  }

  const millisToMinsAndSecs = (millis) => {
    const minutes = Math.floor(millis / 60000); // 1 minute = 60000 milliseconds
    const seconds = ((millis % 60000) / 1000).toFixed(0); // 1 second = 1000 milliseconds
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; 
    // return seconds === 60 ? minutes + 1 + ':00' : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <div className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer" onClick={playSong}>
      <div className="flex items-center space-x-3">
        <p className="text-gray-400">{order + 1}</p> {/* order + 1 because the first song is 0 */}
        <img
          className="w-12 h-12"
          src={imageUrl}
          // alt={trackName}
        />
        <div>
          <p className='w-36 lg:w-64 text-white truncate'>{trackName}</p>
          <p className="w-40 text-gray-400">{artistsName}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-40 hidden md:inline">{albumName}</p>
        <p>{millisToMinsAndSecs(track.track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
