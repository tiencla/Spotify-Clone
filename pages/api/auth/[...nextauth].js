import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import SpotifyApi, { LOGIN_URL } from '../../../lib/spotify';

const refreshAccessToken = async (token) => {
    try {
        SpotifyApi.setAccessToken(token.accessToken);
        SpotifyApi.setAccessToken(token.refreshToken);
        console.log('refreshing token', token)

        const {body: refreshedToken} = await SpotifyApi.refreshAccessToken();
        console.log('refreshedToken --->', refreshedToken);
        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now() + refreshToken.expires_in * 1000, // 1 hour in ms 
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

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  // ! https://next-auth.js.org/tutorials/refresh-token-rotation
  callbacks: { 
    async jwt({ token, account, user }) {
        if (account && user) {
            return {
                ...token,
                accessToken: account.access_token,
                refreshToken: account.refresh_token,
                // username: user.display_name,
                username: account.providerAccountId,
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
});

