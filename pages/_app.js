import AppProps from 'next/app';
import Head from "next/head";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { store } from '../App/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }, AppProps) {
  return (
    <>
    <Head>
      <title>Cotton-Messenger</title>
    </Head>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Nav />
  <Component {...pageProps} />
  <Footer />
  </ThemeProvider>
  </Provider>
  </>
  );
}

export default MyApp;
