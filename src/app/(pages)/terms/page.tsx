
import React from 'react';
import Nav from '../../../components/landing/nav';
import Footer from '../../../components/landing/footer';
import Image from 'next/image';


type Props = {};

const terms = (props: Props) => {
  return (
    <div className="flex-1 justify-between items-center bg-gray-950">
      <Nav />
      <section className="terms text-white bg-gray-950 relative isolate flex justify-center py-32 px-10">
        <div className='max-w-[60%] text-gray-500 text-sm '>
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-20 ml-60">
            Terms and Conditions for Amigo
          </h2>
          {/* <p className="mb-2">Last Updated: 10 April 2024</p> */}
          <p className="mb-4 text-gray-300">
  Welcome to Amigo (&quot;Amigo&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These terms and conditions outline the rules and regulations
  for the use of Amigo&apos;s App, located at Amigo.com.
</p>
          <p className="mb-4 text-gray-300">
            By accessing this app we assume you accept these terms and conditions. Do not continue to use Amigo if you do
            not agree to take all of the terms and conditions stated on this page.
          </p>
          <h3 className="text-xl text-gray-200 font-bold mb-2">The following terminology applies to these Terms and Conditions:</h3>
          <p className="mb-4 text-gray-400">
            <strong>Client</strong>, <strong>You</strong> and <strong>Your</strong> refers to you, the person log on this
            app and compliant to the Company’s terms and conditions. <strong>The Company</strong>, <strong>Ourselves</strong>,{' '}
            <strong>We</strong>, <strong>Our</strong> and <strong>Us</strong>, refers to our Company.
          </p>
          <p className="mb-4 text-gray-300">
            <strong>Party</strong>, <strong>Parties</strong>, or <strong>Us</strong>, refers to both the Client and
            ourselves.
          </p>
          <h3 className="text-xl text-white font-bold mb-2">License</h3>
          <p className="mb-4 text-gray-300">
            Unless otherwise stated, Amigo and/or its licensors own the intellectual property rights for all material on
            Amigo. All intellectual property rights are reserved. You may access this from Amigo for your own personal use
            subjected to restrictions set in these terms and conditions.
          </p>
          <h3 className="text-xl text-gray-100 font-bold mb-2">Restrictions</h3>
          <ul className="list-disc list-inside mb-4 text-gray-400">
            <li>Publishing any website material in any other media;</li>
            <li>Selling, sublicensing and/or otherwise commercializing any website material;</li>
            <li>Publicly performing and/or showing any website material;</li>
            <li>Using this app in any way that is or may be damaging to this app;</li>
          </ul>
          <h3 className="text-xl text-white font-bold mb-2">User Comments</h3>
          <p className="mb-4 text-gray-400">
            This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms
            And Conditions Generator.
          </p>
          <p className="mb-4 text-gray-400">
            Parts of this app offer an opportunity for users to post and exchange opinions and information in certain areas
            of the website. Amigo does not filter, edit, publish or review Comments prior to their presence on the website.
            Comments do not reflect the views and opinions of Amigo, its agents and/or affiliates. Comments reflect the
            views and opinions of the person who post their views and opinions.
          </p>
        </div>
        <div className="relative mt-40 w-full">
          <Image
           width={500}
           height={500}
            src="/images/terms.jpeg"
            alt="About Us"
            className="w-full md:w-1/2 mt-20 md:mt-32"
          />
          <Image
           width={500}
           height={500}
            src="/images/terms2.jpeg"
            alt="About Us"
            className="w-full md:w-1/2 absolute top-20 right-28 transform translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
  };

export default terms;
