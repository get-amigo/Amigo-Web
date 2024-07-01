import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Usp: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #000 0%, #4C0677 100%)',
      color: '#fff',
      padding: '2rem',
      fontFamily: 'Readex Pro'
    }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <section style={{ display: 'flex', alignItems: 'center', marginBottom: '4rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '28px', marginBottom: '1rem' }}>Expense Sharing</h2>
          <p style={{ fontSize: '28px' }}>
            Amigo makes it easy to share bills with friends. 
            Create groups, add bills, and stay on top of the math. Whether it's one-off costs or ongoing expenses, Amigo makes sure everyone pays their fair share. 
            You can also manage recurring payments to keep a running balance, making it easy to manage your running costs.
          </p>
        </div>
        <div>
          <Image 
            src="/images/USP.png" 
            width={320} 
            height={364} 
          />
        </div>
      </section>

      <section style={{ display: 'flex', alignItems: 'center', marginBottom: '4rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '28px', marginBottom: '1rem' }}>Fast UPI Payments</h2>
          <p style={{ fontSize: '28px' }}>
          With Amigo's UPI integration, you can send and receive money quickly and securely. Pay your friends directly from the app without multiple transactions. Our platform supports instant transfers, ensuring expenses are paid locally, offering convenience and peace of mind.
          </p>
        </div>
        <div>
          <Image 
            src="/images/USP.png" 
            width={320} 
            height={364} 
          />
        </div>
      </section>

      <section style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '28px', marginBottom: '1rem' }}>Chat integration</h2>
          <p style={{ fontSize: '28px' }}>
          Keep in touch with your friends with Amigo's built-in chat. Discuss expenses, remind team members about expected payments and plan future activities in the program. Combining chat and financial management streamlines communication, which improves overall group financial management.          </p>
        </div>
        <div>
          <Image 
            src="/images/USP.png" 
            width={320} 
            height={364} 
          />
        </div>
      </section>
    </div>
  );
};

export default Usp;
