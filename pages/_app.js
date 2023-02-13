import AppProps from 'next/app';
import Head from "next/head";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }, AppProps) {
  return (
    <>
    <Head>
      <title>Cotton-Messenger</title>
    </Head>
    <GlobalStyle />
    <Nav />
  <Component {...pageProps} />
  <Footer />
  </>
  );
}

export default MyApp;
