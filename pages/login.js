import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }) => {
  // console.log('providers --->', providers)
  return (
    <div className="flex flex-col text-center items-center bg-black min-h-screen w-full justify-center relative">
      <div className="bg-black w-screen flex items-center justify-center relative h-30">
        <img
          className="w-16 md-20 lg:w-24 bg-white rounded-full mr-7 md:mr-12 "
          // className="w-52 mb-4"
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
          alt="spotify logo"
        />

        <h1
          className="text-4xl lg:text-9xl md:text-7xl  uppercase font-bold"
          style={{
            color: '#1ed760',
          }}
        >
          Spotify
        </h1>
        <small className="absolute top-[6.2rem] right-[28rem] font-extrabold uppercase text-lg text-white hidden lg:block">Clone</small>

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="bg-[#18d860] text-white p-4 rounded-full" onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
              Login with {provider.name}
            </button>{' '}
            {/* //! These are the scopes in spotify.js */}
          </div>
        ))}
      </div>
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
