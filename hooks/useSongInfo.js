import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState } from '../atoms/songAtom';
import useSpotify from './useSpotify';

const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);

  // useEffect(() => {
  //   const fetchSongInfo = async () => {
  //     if (currentTrackId) {
  //       try {
  //         const trackInfo = await fetch(
  //           `https://api.spotify.com/v1/tracks/${currentTrackId}`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
  //             },
  //           }
  //         );
  //         const res = await trackInfo.json();
  //         setSongInfo(res);
  //         console.log('trackInfo --->', trackInfo)
  //         console.log('res --->', res)
  //         console.log('currentTrack --->', currentTrackId)
  //       } catch (error) {
  //         console.error('Error fetching track info:', error);
  //       }
  //     }
  //   };
  //   fetchSongInfo();
  // }, [currentTrackId, spotifyApi]);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentTrackId) {
        const headers = new Headers({
          Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
        });
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${currentTrackId}`,
          { headers }
        );
        const res = await trackInfo.json();
        setSongInfo(res);
      }
    };
    fetchSongInfo();
  }, [currentTrackId, spotifyApi]);

  return songInfo;
};

export default useSongInfo;
