import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from 'next/head';
import Image from 'next/image';

const Tutorial: React.FC = () => {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const updateCustomSlideClasses = (swiper) => {
    const slides = swiper.slides;
    if (!slides) return;

    slides.forEach(slide => {
      slide.classList.remove('swiper-slide-prev-prev', 'swiper-slide-next-next');
    });

    const activeIndex = swiper.activeIndex;
    const totalSlides = slides.length;

    const prevPrevIndex = (activeIndex - 2 + totalSlides) % totalSlides;
    const nextNextIndex = (activeIndex + 2) % totalSlides;

    slides[prevPrevIndex].classList.add('swiper-slide-prev-prev');
    slides[nextNextIndex].classList.add('swiper-slide-next-next');
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      swiperInstance.on('slideChange', () => updateCustomSlideClasses(swiperInstance));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            swiperInstance.params.autoplay.disableOnInteraction = false;
            swiperInstance.autoplay.start();
          } else {
            swiperInstance.autoplay.stop();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#0F0E14] text-white md:px-20 py-8 font-[Readex Pro] h-screen" ref={sectionRef}>
      <h2 className="font-bold text-4xl text-center">How It Works</h2>
      <div className="flex justify-center">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={-240}
          slidesPerView={isMobile ? 3 : 5}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.swiper-pagination', bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active' }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          allowTouchMove={isMobile}
          className="custom-swiper w-5/6 md:w-2/3"
          onSlideChange={(swiper) => updateCustomSlideClasses(swiper)}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide className="swiper-slide-custom" key={index}>
              <div className="flex flex-col items-center text-center pb-8">
                <Image src={slide.image} width={256} height={291} alt={`Step ${index + 1}`} />
                <p className="slide-text text-3xl mt-3">Step {index + 1}</p>
                <p className="slide-text mt-2">{slide.title}</p>
                <br />
                <p className="slide-text">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
          {!isMobile && (
            <>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </>
          )}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
      <style jsx global>{`
        .custom-swiper {
          padding: 20px 0;
        }
        .swiper-slide-custom {
          position: relative;
          opacity: 0;
          transition: opacity 0.1s, transform 0.3s;
          z-index: 0;
        }
        .swiper-slide-custom.swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 5;
        }
        .swiper-slide-custom.swiper-slide-prev,
        .swiper-slide-custom.swiper-slide-next {
          opacity: 1;
          transform: scale(0.95);
          z-index: 3;
        }
        .swiper-slide-custom.swiper-slide-prev-prev,
        .swiper-slide-custom.swiper-slide-next-next {
          opacity: 1;
          transform: scale(0.9);
          z-index: 1;
        }
        .swiper-slide-custom .slide-text {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .swiper-slide-custom.swiper-slide-active .slide-text {
          opacity: 1;
        }
        .swiper-pagination-bullet {
          background-color: #272239;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #FFFFFF;
        }
        .swiper-button-prev, .swiper-button-next {
          background-size: contain;
          background-repeat: no-repeat;
          width: 30px;
          height: 30px;
          z-index: 10;
          background-image: none;
          cursor: pointer;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          content: none;
        }
        .swiper-button-prev {
          background-image: url('/images/arrow-left.png');
          transform : scale(1.5) translateY(-200%);
        
        }
        .swiper-button-next {
          background-image: url('/images/arrow-right.png');
          transform : scale(1.5) translateY(-200%);

        }

        @media (max-width: 768px) {
          .swiper-slide-custom.swiper-slide-prev-prev,
          .swiper-slide-custom.swiper-slide-next-next {
            opacity: 0;
          }
          .swiper-button-prev, .swiper-button-next {
            display: none;
          }
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
    description: 'Select a group and click "Add Expenses" and enter expense information like amount and description and share the costs equally or change the distribution according to the payments.',
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
