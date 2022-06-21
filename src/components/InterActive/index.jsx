import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from "swiper"
import 'swiper/css';
import "swiper/css/pagination";

import Button from '../Button';

const InterActive = () => {
    return (
        <section className='py-14'>
            <div className='responsive flex justify-between items-end w-full border-b'>
                <h2 className='md:text-2xl text-base mb-0'>Interaktiv Xizmatlar</h2>
                <div>
                    <Button className="px-2 py-1" title='Barchasini ko’rish' />
                </div>
            </div>
            <div className='responsive mt-12 grid grid-cols-2 h-screen'>
                <Swiper
                    direction={"vertical"}
                    slidesPerView={3}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Mousewheel, Pagination, Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className='w-full'>
                        <div className='w-full bg-white'>
                            hello
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                <div>dhhdh</div>
            </div>
        </section>
    )
}

export default InterActive