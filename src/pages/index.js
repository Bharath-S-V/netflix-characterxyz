import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';
import Login from '@/components/Login';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
const {data: session}=useSession
if(!session) return <Login/>;
  return (
    <>
      <Head>
        <tite>Netlix</tite>
      </Head>
      <main>We Have Session</main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
