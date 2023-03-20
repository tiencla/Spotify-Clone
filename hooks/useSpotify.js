import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import SpotifyApi from '../lib/spotify';
import SpotifyWebApi from 'spotify-web-api-node';

const useSpotify = () => {
  const { data: session } = useSession();

  useEffect(() => {
    // // if refresh token doesnt work then sign in again
    if (session) {
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }
      SpotifyApi.setAccessToken(session.user.accessToken);
      // spotifyApi.setAccessToken(session.accessToken)
      console.log('session --->', session.user.accessToken);
    }
  }, [session]);

  return SpotifyApi;
};

export default useSpotify;
