import Head from 'next/head'
import Image from 'next/image'
// import Document, { Html, Head, Main, NextScript } from 'next/document'
import Main from './Main/Main';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';

export default function Home() {
  return (
  <>
  {/* <Main /> */}
  <SignUp />
  <SignIn />
  </>
  )
}
