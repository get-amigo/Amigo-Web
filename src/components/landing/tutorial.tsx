import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from 'next/head';
import Image from 'next/image';

const Tutorial: React.FC = () => {
  return (
    <div className="bg-black text-white p-8 font-[Readex Pro]">
      <h1 className="font-bold text-4xl mb-8 text-center">How It Works</h1>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={-50}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="custom-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: -100,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -50,
          },
        }}
      >
        <SwiperSlide className="swiper-slide-custom">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/tutorial/Download.png"
              width={320}
              height={364}
              alt="Step 1 Image"
            />
            <h2 className="slide-text text-3xl mt-6">Step 1</h2>
            <p className="slide-text mt-2">Install the App</p>
            <p className="slide-text">Download from the App Store or Google Play Store.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/tutorial/login.png"
              width={320}
              height={364}
              alt="Step 2 Image"
            />
            <h2 className="slide-text text-3xl mt-6">Step 2</h2>
            <p className="slide-text mt-2">Register</p>
            <p className="slide-text">Sign up with your phone number.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/tutorial/create group.png"
              width={320}
              height={364}
              alt="Step 3 Image"
            />
            <h2 className="slide-text text-3xl mt-6">Step 3</h2>
            <p className="slide-text mt-2">Create a Group</p>
            <p className="slide-text">Click the "Create Group" button and enter a group name and add members by selecting contact information from your phone.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/tutorial/split expense.png"
              width={320}
              height={364}
              alt="Step 4 Image"
            />
            <h2 className="slide-text text-3xl mt-6">Step 4</h2>
            <p className="slide-text slide-text mt-2">Add Expenses</p>
            <p className="slide-text">Select a group and click "Add Expenses" and enter expense information like amount and description and share the costs equally or change the distribution according to the payments</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/tutorial/settle.png"
              width={320}
              height={364}
              alt="Step 5 Image"
            />
            <h2 className="slide-text text-3xl mt-6">Step 5</h2>
            <p className="slide-text mt-2">Settle Up</p>
            <p className="slide-text">Review the group's expense summary.
              Click on "Settle" to view the balances.
              Choose the members you need to pay or request payment from.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/tutorial/upi.png"
              width={320}
              height={364}
              alt="Step 6 Image"
            />
            <h2 className="slide-text text-3xl mt-6">Step 6</h2>
            <p className="slide-text mt-2">Make Instant UPI Payments</p>
            <p className="slide-text">Click on "Pay Now" for the selected member.
              Enter the payment amount and confirm the transaction via UPI.
              The payment status will update automatically in the app.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/tutorial/Group chat.png"
              width={320}
              height={364}
              alt="Step 7 Image"
            />
            <h2 className="slide-text text-3xl mt-6">Step 7</h2>
            <p className="slide-text mt-2">Chat with Group Members</p>
            <p className="slide-text">Go to the group chat section.
              Discuss expenses, send reminders, and coordinate future activities.
              Use emojis, stickers, and other messaging features for a fun interaction.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/tutorial/profile.png"
              width={320}
              height={364}
              alt="Step 8 Image"
            />
            <h2 className="slide-text text-3xl mt-6">Step 8</h2>
            <p className="slide-text mt-2">Manage Your Account</p>
            <p className="slide-text">Navigate to the "Profile" section to update your personal information.
              Check your payment history and manage your UPI-linked bank accounts.
              Adjust app settings and preferences as needed.</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <style jsx>{`
        .custom-swiper .swiper-slide-custom {
          position: relative;
          z-index: 1;
          opacity: 0.5;
          transition: opacity 0.3s, transform 0.3s;
          transform: scale(0.9);
        }
        .custom-swiper .swiper-slide-custom.swiper-slide-active {
          z-index: 3;
          opacity: 1;
          transform: scale(1);
        }
        .custom-swiper .swiper-slide-custom.swiper-slide-prev,
        .custom-swiper .swiper-slide-custom.swiper-slide-next {
          z-index: 2;
          opacity: 0.8;
          transform: scale(0.95);
        }
        .custom-swiper .swiper-slide-custom .slide-text {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .custom-swiper .swiper-slide-custom.swiper-slide-active .slide-text {
          opacity: 1;
        }
        @media (max-width: 1024px) {
          .custom-swiper .swiper-slide-custom {
            transform: scale(0.95);
          }
          .custom-swiper .swiper-slide-custom.swiper-slide-active {
            transform: scale(1);
          }
        }
        @media (max-width: 640px) {
          .custom-swiper .swiper-slide-custom {
            transform: scale(0.95);
          }
          .custom-swiper .swiper-slide-custom.swiper-slide-active {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Tutorial;
