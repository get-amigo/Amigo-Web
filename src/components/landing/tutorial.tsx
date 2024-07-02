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
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          style={{ width: '100%', height: '100%' }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <Image
                src="/images/tutorial/Download.png"
                width={320}
                height={364}
                alt="Step 1 Image"
              />
              <h2 className="text-3xl mt-6">Step 1</h2>
              <p className="mt-2">Install the App</p>
              <p>Download from the App Store or Google Play Store.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <Image
                src="/images/tutorial/login.png"
                width={320}
                height={364}
                alt="Step 2 Image"
              />
              <h2 className="text-3xl mt-6">Step 2</h2>
              <p className="mt-2">Create an Account</p>
              <p>Sign up using your email or social media account.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <Image
                src="/images/tutorial/Group chat.png"
                width={320}
                height={364}
                alt="Step 3 Image"
              />
              <h2 className="text-3xl mt-6">Step 3</h2>
              <p className="mt-2">Start Using the App</p>
              <p>Explore the features and start managing your finances.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <Image
                src="/images/tutorial/split expense.png"
                width={320}
                height={364}
                alt="Step 4 Image"
              />
              <h2 className="text-3xl mt-6">Step 4</h2>
              <p className="mt-2">Start Using the App</p>
              <p>Explore the features and start managing your finances.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <Image
                src="/images/tutorial/settle.png"
                width={320}
                height={364}
                alt="Step 5 Image"
              />
              <h2 className="text-3xl mt-6">Step 5</h2>
              <p className="mt-2">Start Using the App</p>
              <p>Explore the features and start managing your finances.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <Image
                src="/images/tutorial/upi.png"
                width={320}
                height={364}
                alt="Step 6 Image"
              />
              <h2 className="text-3xl mt-6">Step 6</h2>
              <p className="mt-2">Start Using the App</p>
              <p>Explore the features and start managing your finances.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <Image
                src="/images/tutorial/Download.png"
                width={320}
                height={364}
                alt="Step 7 Image"
              />
              <h2 className="text-3xl mt-6">Step 7</h2>
              <p className="mt-2">Start Using the App</p>
              <p>Explore the features and start managing your finances.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <Image
                src="/images/tutorial/Download.png"
                width={320}
                height={364}
                alt="Step 8 Image"
              />
              <h2 className="text-3xl mt-6">Step 8</h2>
              <p className="mt-2">Start Using the App</p>
              <p>Explore the features and start managing your finances.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Tutorial;