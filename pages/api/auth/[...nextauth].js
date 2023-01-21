import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import spotifyApi, { LOGIN_URL } from '../../../lib/spotify';

const refreshAccessToken = async (token) => {
    try {
        spotifyApi.setAccessToken(token.accessToken);
        spotifyApi.setRefreshToken(token.refreshToken);
        const {data: refreshedToken} = await spotifyApi.refreshAccessToken();
        console.log('refreshedToken --->', refreshedToken);
        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now() + (refreshedToken.expires_in * 1000), // 1 hour in ms 
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken, //* if refresh token is not returned, use the previous one
        }

    } catch (error) {
        console.log(error);
        return {
            ...token,
            error: 'RefreshAccessTokenError',
        }
    }
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: { //! https://next-auth.js.org/tutorials/refresh-token-rotation
    async jwt({ token, account, user }) {
        if (account && user) {
            return {
                ...token,
                accessToken: account.accessToken,
                refreshToken: account.refreshToken,
                username: user.display_name,
                accessTokenExpires: account.expires_at * 1000, // convert to ms 
            }
        }
        // return previous token if access token has not expired
        if (token.accessTokenExpires > Date.now()) {
            console.log('Existing token is still valid')
            return token;
        }
        // access token has expired, refresh it
        console.log('Existing token has expired, refreshing')
        return await refreshAccessToken(token);
    },
    async session({ session, token }) { //* what the users will see in the session
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            session.user.username = token.username;
            
            return session;
    }
  },
  // A database is optional, but required to persist accounts in a database
};

export default NextAuth(authOptions);
