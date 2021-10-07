import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import JumboWelcome from '../components/JumboWelcome';
import LoadingMessage from '../components/loading';
import Landing from './Landing';

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <LoadingMessage />;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>HuntMyParadise</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Landing />
      </main>
    </div>
  );
}
