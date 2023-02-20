import Head from 'next/head'
import Image from 'next/image'
// import Document, { Html, Head, Main, NextScript } from 'next/document'
import Main from './Main/Main';
import Info from '../components/Main/Info/Info';
import Chatting from '../components/Main/Chatting/Chatting';
import ServiceStart from '../components/Main/ServiceStart/ServiceStart';

export default function Home() {
  return (
  <>
  <Main />
  <Info />
  <Chatting />
  <ServiceStart />
  </>
  )
}
