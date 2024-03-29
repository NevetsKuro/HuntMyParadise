import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import LoadingMessage from '../components/loading';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [authOpt, setAuthOpt] = useState('signin');
  useEffect(() => {
    setAuthOpt('signIn');
    setTimeout(() => {
      setLoading(false);
    }, 400);
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

      <main className={styles.main1}>
        {authOpt === 'signIn' ? (
          <SignIn setOpt={setAuthOpt} />
        ) : (
          <SignUp setOpt={setAuthOpt} />
        )}
      </main>
    </div>
  );
}
