import React from 'react';
import Image from 'next/image';

const sectionData = [
  {
    title: "Expense Sharing",
    description: "Amigo makes it easy to share bills with friends. Create groups, add bills, and stay on top of the math. Whether it's one-off costs or ongoing expenses, Amigo makes sure everyone pays their fair share. You can also manage recurring payments to keep a running balance, making it easy to manage your running costs.",
    imgSrcs: ["/images/ExpenseSharing2.png", "/images/ExpenseSharing1.png"],
    imgWidth: 247,
    imgHeight: 680,
    textAlign: "left",
  },
  {
    title: "Fast UPI Payments",
    description: "With Amigo's UPI integration, you can send and receive money quickly and securely. Pay your friends directly from the app without multiple transactions. Our platform supports instant transfers, ensuring expenses are paid locally, offering convenience and peace of mind.",
    imgSrcs: ["/images/FastUPI1.png", "/images/FastUPI2.png"],
    imgWidth: 300,
    imgHeight: 680,
    textAlign: "right",
    isFastUPI: true,
  },
  {
    title: "Chat integration",
    description: "Keep in touch with your friends with Amigo's built-in chat. Discuss expenses, remind team members about expected payments and plan future activities in the program. Combining chat and financial management streamlines communication, which improves overall group financial management.",
    imgSrc: "/images/Frame 34008.png",
    imgWidth: 300,
    imgHeight: 680,
    textAlign: "left",
  },
];

const Usp: React.FC = () => {
  return (
    <div className="text-white p-8 font-[Readex Pro] md:px-32  " style={{ background: 'linear-gradient(212.43deg, #0F0E14 1.62%, #0F0E14 34.14%, #272239 65.56%, #563888 97.64%)' }}>
      {sectionData.map(({ title, description, imgSrcs, imgSrc, imgWidth, imgHeight, textAlign, isFastUPI }, index) => (
        <section key={index} className={`section ${textAlign === 'right' ? 'section-reverse' : ''} ${isFastUPI ? 'fast-upi' : ''}`} style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem'}}>
          <div className="content z">
            <h2 className="font-bold text-4xl mb-4">{title}</h2>
            <p className="text-lg leading-8 text-zinc-200">{description}</p>
          </div>
          <div className="images">
            {imgSrcs ? (
              <>
                {index === 0 ? (
                  <>
                    <div className="image-container bounce-reverse" style={{ zIndex: 2, marginTop: -125 }}>
                      <Image src={imgSrcs[1]} width={imgWidth} height={imgHeight} alt='' />
                    </div>
                    <div className="image-container bounce" style={{ zIndex: 1 }}>
                      <Image src={imgSrcs[0]} width={imgWidth} height={imgHeight} alt='' />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="image-container bounce" style={{ zIndex: 2, marginTop: -115 }}>
                      <Image src={imgSrcs[0]} width={imgWidth} height={imgHeight} alt='' />
                    </div>
                    <div className="image-container bounce-reverse" style={{ zIndex: 1 }}>
                      <Image src={imgSrcs[1]} width={imgWidth} height={imgHeight} alt='' />
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="image-container bounce">
                <Image src={imgSrc} width={imgWidth} height={imgHeight} alt='' />
              </div>
            )}
          </div>
        </section>
      ))}
      <style jsx>{`
        .section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
          text-align: center;
        }
        .section-reverse {
          flex-direction: column-reverse;
        }
        .content {
          width: 100%;
          padding: 0 20px;
        }
        .images {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .image-container {
          width: 50%;
          margin: 0 5px;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes bounce-reverse {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .bounce {
          animation: bounce 3s infinite;
        }
        .bounce-reverse {
          animation: bounce-reverse 3s infinite;
        }
        @media (min-width: 768px) {
          .section {
            flex-direction: row;
            text-align: left;
          }
          .section-reverse {
            flex-direction: row-reverse;
          }
          .content {
            width: 50%;
          }
          .images {
            width: 50%;
          }
          .image-container {
            width: auto;
            margin-left: -70px;
          }
        }
        @media (max-width: 767px) {
          .fast-upi {
            flex-direction: column !important;
          }
          .fast-upi .content {
            order: 1;
          }
          .fast-upi .images {
            order: 2;
          }
          .image-container {
            margin-left: -30px;
            margin-right: -20px;
          }

          .images > *:not(:last-child) {
            padding-top: 180px;
            padding-bottom: 70px;
          }

          .images > *:last-child {
            padding-top: 40px;
            padding-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Usp;
