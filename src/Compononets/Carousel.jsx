import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ReactTyped } from 'react-typed';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images
import bgimg1 from '../assets/imgs/2205.i402.034.S.m004.c13.Treasure hunt flat composition.jpg'; 
import bgimg2 from '../assets/imgs/9019879.jpg';
import bgimg3 from '../assets/imgs/kids-participating-treasure-hunt.jpg'; 

// Slide component
const Slide = ({ image, text }) => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <div className="text-center text-2xl sm:text-3xl font-semibold max-w-4xl">{text}</div>
        <Link 
          to="/AllItemsPage" 
          className="mt-6 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-lg transition duration-300"
        >
          Found Your Item? Click Here
        </Link>
      </div>
    </div>
  );
};

export default function Carousel() {
  const [typedKey, setTypedKey] = useState(0);

  const handleTypedComplete = () => {
    setTypedKey(prevKey => prevKey + 1);
  };

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text={
              <ReactTyped
                key={typedKey}
                strings={["Lost Your Belongings? Let Us Help You Find Them!"]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                onComplete={handleTypedComplete}
                showCursor={true}
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text={
              <ReactTyped
                key={typedKey}
                strings={["Find and Return Lost Items with Ease and Safety"]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                onComplete={handleTypedComplete}
                showCursor={true}
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text={
              <ReactTyped
                key={typedKey}
                strings={["Found Something? Help Reunite Lost Items with Their Owners!"]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                onComplete={handleTypedComplete}
                showCursor={true}
              />
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
