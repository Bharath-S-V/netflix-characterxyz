// Import Inter font
import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';
import Login from '@/components/Login';
import Hero from '@/components/Hero';
import request from '@/utils/request';
import Row from '@/components/Row';
import Footer from '@/components/Footer';

export default function Home({
  moviePosters,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) {
  const { data: session } = useSession();
  if (!session) return <Login />;

  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/netflix_logo_icon_170919.ico" />
      </Head>
      <main className="relative bg-gradient-to-b from-gray-900/10 to-[#010511]">
        <Hero moviePosters={moviePosters} />
        <section className="container pb-32">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
<Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [
    moviePosters,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(request.fetchMoviePosters).then((res) => res.json()),
    fetch(request.fetchTrending).then((res) => res.json()),
    fetch(request.fetchTopRated).then((res) => res.json()),
    fetch(request.fetchActionMovies).then((res) => res.json()),
    fetch(request.fetchComedyMovies).then((res) => res.json()),
    fetch(request.fetchHorrorMovies).then((res) => res.json()),
    fetch(request.fetchRomanceMovies).then((res) => res.json()),
    fetch(request.fetchDocumentaries).then((res) => res.json()),
  ]);
  return {
    props: {
      session,
      moviePosters: moviePosters.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
}
