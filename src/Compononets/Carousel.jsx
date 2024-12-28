import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

// Importing react-typed (ReactTyped)
import { ReactTyped } from 'react-typed';

import bgimg1 from '../assets/imgs/2205.i402.034.S.m004.c13.Treasure hunt flat composition.jpg'; 
import bgimg2 from '../assets/imgs/9019879.jpg';
import bgimg3 from '../assets/imgs/kids-participating-treasure-hunt.jpg'; 
import { useState } from 'react';

export default function Carousel() {
  const handleTypedComplete = () => {
    // Force re-render by changing the key to restart the typing effect
    // This will trigger ReactTyped to restart from the beginning
    setTypedKey(prevKey => prevKey + 1); 
  };

  const [typedKey, setTypedKey] = useState(0);

  return (
    <div className=''>
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
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text={
              <ReactTyped
                key={typedKey} // Use dynamic key to trigger re-render
                strings={["Lost Your Belongings? Let Us Help You Find Them!"]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                onComplete={handleTypedComplete} // Callback to restart typing
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
                key={typedKey} // Use dynamic key to trigger re-render
                strings={["Find and Return Lost Items with Ease and Safety"]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                onComplete={handleTypedComplete} // Callback to restart typing
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
                key={typedKey} // Use dynamic key to trigger re-render
                strings={["Found Something? Help Reunite Lost Items with Their Owners!"]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                onComplete={handleTypedComplete} // Callback to restart typing
                showCursor={true}
              />
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
