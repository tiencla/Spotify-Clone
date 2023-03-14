import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
  'user-read-private',
  'user-read-email',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'streaming',
  'app-remote-control',
  'user-library-read',
  // "user-library-modify",
  'user-top-read',
  'user-read-playback-position',
  'user-follow-read',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private',
].join(',');


const params = {
  scope: scopes, // required scopes for your app to work properly (see above)
};

const queryParamString = new URLSearchParams(params);

// const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;
const LOGIN_URL =
  'https://accounts.spotify.com/authorize?' + queryParamString.toString();

const SpotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});


export default SpotifyApi;
export { LOGIN_URL };
