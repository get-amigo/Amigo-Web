import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay }  from 'swiper/modules'; //Pagination , Navigation
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from 'next/head';
import Image from 'next/image';

const Tutorial: React.FC = () => {
  return (
    <div className="bg-black text-white md:px-20 py-8 font-[Readex Pro]">
      <h2 className="font-bold text-4xl mb-12 text-center">How It Works</h2>
      <div className="flex justify-center">
        <Swiper
          modules ={[Autoplay]} //Pagination , Navigation
          spaceBetween={-200}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          // navigation
          // pagination={{ clickable: true }}
          allowTouchMove={false}
          autoplay={{ delay: 3000 }}
          className="custom-swiper w-1/2"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide className="swiper-slide-custom" key={index}>
              <div className="flex flex-col items-center text-center">
                <Image src={slide.image} width={320} height={364} alt={`Step ${index + 1}`} />
                <h2 className="slide-text text-3xl mt-6">Step {index + 1}</h2>
                <p className="slide-text mt-2">{slide.title}</p>
                <p className="slide-text">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .custom-swiper {
          padding: 20px 0;
        }
        .swiper-slide-custom {
          position: relative;
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
          transform: scale(0.9);
          z-index: 0;
        }
        .swiper-slide-custom.swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 3;
        }
        .swiper-slide-custom.swiper-slide-prev {
          opacity: 0.8;
          transform: scale(0.95);
          z-index: 2;
        }
        .swiper-slide-custom.swiper-slide-next {
          opacity: 0.8;
          transform: scale(0.95);
          z-index: 1;
        }
        .swiper-slide-custom .slide-text {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .swiper-slide-custom.swiper-slide-active .slide-text {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

const slidesData = [
  {
    image: '/images/tutorial/Download.png',
    title: 'Install the App',
    description: 'Download from the App Store or Google Play Store.',
  },
  {
    image: '/images/tutorial/login.png',
    title: 'Register',
    description: 'Sign up with your phone number.',
  },
  {
    image: '/images/tutorial/create group.png',
    title: 'Create a Group',
    description: 'Click the "Create Group" button and enter a group name and add members by selecting contact information from your phone.',
  },
  {
    image: '/images/tutorial/split expense.png',
    title: 'Add Expenses',
    description: 'Select a group and click "Add Expenses" and enter expense information like amount and description and share the costs equally or change the distribution according to the payments',
  },
  {
    image: '/images/tutorial/settle.png',
    title: 'Settle Up',
    description: 'Review the group\'s expense summary. Click on "Settle" to view the balances. Choose the members you need to pay or request payment from.',
  },
  {
    image: '/images/tutorial/upi.png',
    title: 'Make Instant UPI Payments',
    description: 'Click on "Pay Now" for the selected member. Enter the payment amount and confirm the transaction via UPI. The payment status will update automatically in the app.',
  },
  {
    image: '/images/tutorial/Group chat.png',
    title: 'Chat with Group Members',
    description: 'Go to the group chat section. Discuss expenses, send reminders, and coordinate future activities. Use emojis, stickers, and other messaging features for a fun interaction.',
  },
  {
    image: '/images/tutorial/profile.png',
    title: 'Manage Your Account',
    description: 'Navigate to the "Profile" section to update your personal information. Check your payment history and manage your UPI-linked bank accounts. Adjust app settings and preferences as needed.',
  },
];

export default Tutorial;
