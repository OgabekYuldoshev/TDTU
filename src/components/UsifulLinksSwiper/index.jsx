import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper"
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import ServeiceCard from '../ServiceCard';

const UsifulLinks = () => {
    return (
        <section className='py-14'>
            <div className='responsive flex justify-between items-end w-full border-b'>
                <h2 className='md:text-2xl text-base mb-0'>Foydali Havolalar</h2>
            </div>
            <div className='responsive mt-12'>
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <ServeiceCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServeiceCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default UsifulLinks