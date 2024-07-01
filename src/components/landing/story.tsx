import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Story: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', fontFamily: 'Readex Pro' }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <section style={{ marginBottom: '2rem', textAlign: 'left' }}>
        <h1 style={{ fontSize: '32px' }}>About us</h1>
        <p style={{ fontSize: '24px' }}>
          Our goal at Amigos is to revolutionize the way friends manage their finances together. Our mission is to provide a seamless and user-friendly platform for cost sharing, instant UPI payment and easy communication. Amigo is your one-stop destination for all your finance management expense sharing.
        </p>
        <p style={{ fontSize: '24px' }}>
          We at Amigo are committed towards revolutionizing the way friends and family manage their finances together. We aim to provide a seamless and user friendly platform for you for cost sharing, instant UPI payment and easy communication. Amigo is your one-stop destination for all your finance management and expense sharing.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
          <Image 
            src="/images/story1.jpeg" 
            width={320} 
            height={364} 
            alt="Story Image 1"
          />
          <Image 
            src="/images/story2.jpeg" 
            width={320} 
            height={364} 
            alt="Story Image 2"
          />
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px' }}>Our Story</h2>
        <p style={{ fontSize: '24px' }}>
          We were on a trip to Coorg and my roommate had to keep all the bills and had to write everything in order to split the bills and in order to tackle this problem we are introducing Amigo, your one-stop destination for all your bills.
        </p>
      </section>
    </div>
  );
};

export default Story;
