import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel, Autoplay } from "swiper"
import 'swiper/css'
import "swiper/css/pagination"
import "./main.scss"
import Interactive from "../../assets/svg/interactive.svg"
import InterAir from "../../assets/svg/inter-air.svg"
import leaf from "../../assets/svg/leaf.svg"
import InterCloud from "../../assets/svg/inter-cloud.svg"
import InterRot from "../../assets/svg/rot.svg"
import InterRotMini from "../../assets/svg/rot-mini.svg"

import Button from '../Button'
import Services from "./Services"

const InterActive = () => {
    return (
        <section className='py-14'>
            <div className='responsive flex justify-between items-end w-full border-b'>
                <h2 className='md:text-2xl text-base mb-0'>Interaktiv Xizmatlar</h2>
                <div>
                    <Button className="px-2 py-1" title='Barchasini ko’rish' />
                </div>
            </div>
            <div className='responsive mt-12 grid md:grid-cols-2 grid-cols-1 md:h-[450px] h-[800px] justify-between gap-10'>
                <Swiper
                    className='w-full'
                    direction={"vertical"}
                    slidesPerView={5}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        el: '.swiper-pagination'
                    }}
                    modules={[Mousewheel, Pagination, Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide className='w-full'>
                        <Services />
                    </SwiperSlide>
                    <SwiperSlide className='w-full'>
                        <Services />
                    </SwiperSlide>
                    <SwiperSlide className='w-full'>
                        <Services />
                    </SwiperSlide>
                    <SwiperSlide className='w-full'>
                        <Services />
                    </SwiperSlide>
                </Swiper>
                <div className="in__items__img flex relative w-full 2xl:w-4/5 h-[300px]">
                    <img className='big w-11/12 absolute z-[2]' src={Interactive} alt="" />
                    <div className='airDiv rounded-full relative w-[90%] h-[67%]'>
                        <img className='air translate-y-1/2 top-[-22px] left-[46%] absolute w-[80px]' src={InterAir}
                            alt="" />
                    </div>
                    <img className='leaf top-3.5 left-[125px] absolute z-[1]' src={leaf} alt="" />
                    <img className='cloud z-[1] top-[12%] left-[75%] absolute' src={InterCloud} alt="" />
                    <img className='rot w-72 z-[1] md:top-[-26%] md:left-[38%] 2xl:top-[-20%] 2xl:left-[43%] absolute' src={InterRot} alt="" />
                    <img className='rot2 w-40 z-[1] top-[45%] left-[54%] 2xl:left-[55%] 2xl:w-48 2xl:top-[45%] absolute' src={InterRotMini} alt="" />
                </div>
            </div>
        </section>
    )
}

export default InterActive