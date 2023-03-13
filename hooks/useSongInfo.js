import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentSongState } from '../atoms/songAtom';
import useSpotify from './useSpotify';

const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const [currentTrack, setCurrentTrack] = useRecoilState(currentSongState);
  const [songInfo, setSongInfo] = useState(null);

//   console.log('access token --->', spotifyApi.getAccessToken())
  // useEffect(() => {
  //     const fetchSongInfo = async () => {
  //         if (currentTrack) {
  //             const trackInfo = await spotifyApi.getTrack(currentTrack)
  //             setSongInfo(trackInfo)
  //         }
  //     }
  //     fetchSongInfo()
  // }, [currentTrack, spotifyApi])

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentTrack) {
        const trackInfo = await fetch(`https://api.spotify.com/v1/tracks/${currentTrack}`, {
          headers: {
            Authorization: `Bearer ${spotifyApi.getAccessToken()}`, //* Bearer is a type of token that is used to authenticate a user
          },
        });
        const res = await trackInfo.json();
        setSongInfo(res);
        console.log('trackInfo --->', trackInfo)
        console.log('res --->', res)
        console.log('currentTrack --->', currentTrack)
      }
    };
    fetchSongInfo();
  }, [currentTrack, spotifyApi]);

  return songInfo;
};

export default useSongInfo;
