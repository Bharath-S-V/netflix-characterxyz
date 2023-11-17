import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar'; // Import your Navbar component
import Footer from '../components/Footer'; // Import your Footer component

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <Component {...pageProps} />

        {/* Footer */}
        <Footer />
      </div>
    </SessionProvider>
  );
}
