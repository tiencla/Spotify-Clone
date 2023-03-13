import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar/Sidebar';
import Center from '../components/Center/Center';
import { getSession } from 'next-auth/react';

const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div> {/* player/footer */}</div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) { 
  const session = await getSession(context); //* this is the session object from next-auth that we can use to check if user is logged in or not and get user info
  return {
    props: {
      session,
    },
  };
}
