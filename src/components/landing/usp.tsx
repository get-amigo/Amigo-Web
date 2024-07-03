import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const sectionData = [
  {
    title: "Expense Sharing",
    description: "Amigo makes it easy to share bills with friends. Create groups, add bills, and stay on top of the math. Whether it's one-off costs or ongoing expenses, Amigo makes sure everyone pays their fair share. You can also manage recurring payments to keep a running balance, making it easy to manage your running costs.",
    imgSrc: "/images/Frame 34012.png",
    imgWidth: 494,
    imgHeight: 818,
    textAlign: "left",
  },
  {
    title: "Fast UPI Payments",
    description: "With Amigo's UPI integration, you can send and receive money quickly and securely. Pay your friends directly from the app without multiple transactions. Our platform supports instant transfers, ensuring expenses are paid locally, offering convenience and peace of mind.",
    imgSrc: "/images/Frame 34013.png",
    imgWidth: 702,
    imgHeight: 726,
    textAlign: "right",
  },
  {
    title: "Chat integration",
    description: "Keep in touch with your friends with Amigo's built-in chat. Discuss expenses, remind team members about expected payments and plan future activities in the program. Combining chat and financial management streamlines communication, which improves overall group financial management.",
    imgSrc: "/images/Frame 34008.png",
    imgWidth: 384,
    imgHeight: 750,
    textAlign: "left",
  },
];

const Usp: React.FC = () => {
  return (
    <div className="text-white p-8 font-[Readex Pro]" style={{ background: 'linear-gradient(212.43deg, #0F0E14 1.62%, #0F0E14 34.14%, #272239 65.56%, #563888 97.64%)' }}>
      {sectionData.map(({ title, description, imgSrc, imgWidth, imgHeight, textAlign }, index) => (
        <section key={index} className={`flex flex-col md:flex-row ${textAlign === 'right' ? 'md:flex-row-reverse' : ''} items-center mb-16 text-center md:text-${textAlign}`}>
          <div className={`md:w-1/2 ${textAlign === 'left' ? 'pl-0 md:pl-20' : 'pr-0 md:pr-20 md:ml-20'}`}>
            <h2 className="font-bold text-2xl mb-4">{title}</h2>
            <p className="text-lg leading-8 text-zinc-200">{description}</p>
          </div>
          <div className={`md:w-1/2 ${textAlign === 'right' ? 'pl-0 md:pl-20' : 'flex justify-end md:pr-20'}`}>
            <div className="py-20 sm:py-0">
              <Image src={imgSrc} width={imgWidth} height={imgHeight} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Usp;