import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';


function Home() {
    const swipeimgs=[
        {img:"https://watermark.lovepik.com/photo/40005/9625.jpg_wh1200.jpg"},
        {img:"https://png.pngtree.com/background/20230527/original/pngtree-d-set-of-a-news-camera-and-news-desk-with-microphone-picture-image_2765822.jpg"},
        {img:"https://files.prokerala.com/news/photos/imgs/1024/our-journalism-will-continue-with-humans-not-ai-1594258.jpg"},
        {img:"https://media.istockphoto.com/id/1311529896/vector/news-room-realistic-studio-for-recording-tv-programs-3d-newscasters-table-and-presentation.jpg?s=612x612&w=0&k=20&c=fTvVgjIQftFEE2FZ7Y1PB_6m5daVtsi1Ve1yYlXVovY="},
        {img:"https://spencerauthor.com/wp-content/uploads/2018/05/journalism-quote.png"},
        {img:"https://media.istockphoto.com/id/1183983163/photo/an-old-war-journalist-in-action.jpg?s=612x612&w=0&k=20&c=W4AHBZkj2rADj2hI3tYdR58OolIZZb0ArhmA9PKpgqA="},
    ]
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        {swipeimgs.map((imgs,index)=>(

        <SwiperSlide key={index}><img src={imgs.img} alt='images'/></SwiperSlide>
        ))}
        
      </Swiper>

<div class="bg-gray-900 py-20 h-[92vh]">
    <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:w-2/3">
                <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                    Welcome to our <br class="hidden md:block" />
                    <span class="text-indigo-500">Awesome</span> Website
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                    We create beautiful and functional websites for businesses of all sizes.
                </p>
                <div class="flex gap-2">
                    <a href="#" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Get
                        Started
                    </a>
                    <a href="#" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                        More
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                <img src="https://files.prokerala.com/news/photos/imgs/1024/our-journalism-will-continue-with-humans-not-ai-1594258.jpg" alt="Hero Image" class="rounded-lg shadow-lg" />
            </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default Home