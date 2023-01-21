import { getProviders, signIn } from 'next-auth/react';

const Login = ({providers}) => {
    // console.log('providers --->', providers)
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img className='w-52 mb-4 ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png'></img>
      {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className='bg-[#18d860] text-white p-4 rounded-full' 
            onClick={() => signIn(provider.id, {callbackUrl: 'http://localhost:3000/'})} 
            >Login with {provider.name}</button> //! These are the scopes in spotify.js
    </div>
      ))}
      </div>
  );
};

export default Login;
//* Server side rendering
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers }, //* will be passed to the page component as props
  };
}
