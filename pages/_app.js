import AppProps from 'next/app';
import Head from "next/head";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }, AppProps) {
  return (
    <>
    <Head>
      <title>Cotton-Messenger</title>
    </Head>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Nav />
  <Component {...pageProps} />
  <Footer />
  </ThemeProvider>
  </>
  );
}

export default MyApp;
