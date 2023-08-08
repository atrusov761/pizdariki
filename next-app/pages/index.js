import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FormQA from '../components/FormQA';
import FormSearch from '../components/FormSearch';
import FormPodcasts from '../components/FormPodcasts';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js App
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Question & Answer</h2>
            <FormQA />
          </div>

          <div className={styles.card}>
            <h2>Search Knowledge Base</h2>
            <FormSearch />
          </div>

          <div className={styles.card}>
            <h2>Podcasts</h2>
            <FormPodcasts />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}