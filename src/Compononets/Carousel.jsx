// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bgimg1 from '../assets/imgs/2205.i402.034.S.m004.c13.Treasure hunt flat composition.jpg'; 
import bgimg2 from '../assets/imgs/9019879.jpg';
import bgimg3 from '../assets/imgs/kids-participating-treasure-hunt.jpg'; 

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
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
            text='Lost Your Belongings? Let Us Help You Find Them!'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Find and Return Lost Items with Ease and Safety'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Found Something? Help Reunite Lost Items with Their Owners!'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
