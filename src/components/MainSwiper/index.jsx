import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from "swiper"
import 'swiper/css'
import "swiper/css/effect-fade"

import Button from '../Button'
import { Progress } from 'antd'

const MainSwiper = () => {
    return (
        <div style={{ background: "url(https://images.unsplash.com/photo-1653931565039-c500acbb31d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)" }} className='bg-center bg-cover'>
            <div className=' py-[60px] px-10 bg-opacity-80 bg-white'>
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    effect={"slide"}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-10'>
                            <div className='sm:hidden block'>
                                <img height={600} className="object-cover object-center rounded-lg shadow-lg" src='https://images.unsplash.com/photo-1655748403948-96f04e5f2cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='md:text-2xl text-lg sm:text-start text-center font-bold'>Rektor va talaba-yoshlar uchrashuvi</h1>
                                <p className='md:text-base sm:text-start text-center'>11-mart kuni soat 14:00 da Toshkent davlat texnika universiteti rektori Turabdjanov Sadritdin Maxamaddinovich boshchiligida universitet 1-kurs guruh sardorlari bilan uchrashuv bo‘lib o‘tdi</p>
                                <div className='flex justify-between items-end w-full gap-10'>

                                    <Button className="px-5 py-1" title="Batafsil" />
                                </div>
                            </div>
                            <div className='sm:block hidden '>
                                <img width={800} height={600} className="object-cover object-center rounded-lg shadow-lg" src='https://images.unsplash.com/photo-1655748403948-96f04e5f2cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-10'>
                            <div className='sm:hidden block '>
                                <img height={600} className="object-cover object-center rounded-lg shadow-lg" src='https://images.unsplash.com/photo-1638913662415-8c5f79b20656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='md:text-2xl text-lg sm:text-start text-center font-bold'>Rektor va talaba-yoshlar uchrashuvi</h1>
                                <p className='md:text-base sm:text-start text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo impedit praesentium.</p>
                                <div className='flex justify-between items-center'>

                                    <Button className="px-5 py-1" title="Batafsil" />
                                </div>
                            </div>
                            <div className='sm:block hidden '>
                                <img width={800} height={600} className="object-cover object-center rounded-lg shadow-lg" src='https://images.unsplash.com/photo-1638913662415-8c5f79b20656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default MainSwiper