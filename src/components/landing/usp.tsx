import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Usp: React.FC = () => {
  return (
  <div className="bg-gradient-to-b from-black to-[#4C0677] text-white p-8 font-[Readex Pro]">
      <section className="flex flex-col md:flex-row items-center mb-16 text-center md:text-left">
        <div className="md:w-1/2 pl-0 md:pl-20"> 
          <h2 className="font-bold text-2xl mb-4">Expense Sharing</h2>
          <p className="text-lg leading-8 text-zinc-200">
            Amigo makes it easy to share bills with friends. 
            Create groups, add bills, and stay on top of the math. Whether it's one-off costs or ongoing expenses, Amigo makes sure everyone pays their fair share. 
            You can also manage recurring payments to keep a running balance, making it easy to manage your running costs.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end md:pr-20">
          <Image 
            src="/images/Frame 34012.png" 
            width={494}
            height={818}
            className="py-20 sm:py-0"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center mb-16 text-center md:text-right">
        <div className="md:w-1/2 pr-0 md:pr-20 md:ml-20">
          <h2 className="font-bold text-2xl mb-4 pr-0 md:pr-20">Fast UPI Payments</h2>
          <p className="text-lg leading-8 text-zinc-200 pr-0 md:pr-20">
            With Amigo's UPI integration, you can send and receive money quickly and securely. Pay your friends directly from the app without multiple transactions. Our platform supports instant transfers, ensuring expenses are paid locally, offering convenience and peace of mind.
          </p>
        </div>
        <div className="md:w-1/2 pl-0 md:pl-20">
          <div className="py-20 sm:py-0">
            <Image 
              src="/images/Frame 34013.png" 
              width={702}
              height={726}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2 pl-0 md:pl-20 md:mr-20">
          <h2 className="font-bold text-2xl mb-4 pl-0 md:pl-20">Chat integration</h2>
          <p className="text-lg leading-8 text-zinc-200 pl-0 md:pl-20">
          Keep in touch with your friends with Amigo's built-in chat. Discuss expenses, remind team members about expected payments and plan future activities in the program. Combining chat and financial management streamlines communication, which improves overall group financial management.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end md:pr-20">
          <Image 
            src="/images/Frame 34008.png" 
            width={384}
            height={750}
            className="py-20 sm:py-0"
          />
        </div>
      </section>
    </div>
  );
};

export default Usp;