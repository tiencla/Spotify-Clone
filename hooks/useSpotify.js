import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import SpotifyApi from '../lib/spotify'
import SpotifyWebApi from 'spotify-web-api-node'

// const spotifyApi = new SpotifyWebApi({
//     clientId: 'd5b5b090c5b242cf85d7e946bf7c592c',
//     clientSecret: 'd37a4c6e629641d5884a5d208b136d12',
    
// })

const useSpotify = () => {
    const { data: session} = useSession()
    
    useEffect(() => { // // if refresh token doesnt work then sign in again
        if(session) {
            if(session.error === 'RefreshAccessTokenError') {
                signIn();
            }
            SpotifyApi.setAccessToken(session.user.accessToken)
            // spotifyApi.setAccessToken(session.accessToken)
            console.log('session --->', session.user.accessToken)
        }
    }, [session])

    return  SpotifyApi
}

export default useSpotify