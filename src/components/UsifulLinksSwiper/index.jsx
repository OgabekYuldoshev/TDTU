import React, { useState, useEffect } from 'react'
import { get } from "lodash"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper"
import 'swiper/css'
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import { http } from "../../servises"
import ServeiceCard from '../ServiceCard'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

const UsifulLinks = () => {
    const { t } = useTranslation()
    const [data, setData] = useState([])

    useEffect(() => {
        const fetch = async () => {
            await http.request.get("/public/api/usefullinks").then((res => {
                const resData = get(res, 'data.data')
                setData(resData)
            })).catch((error) => {
                toast.error(`Error: ${  error}`)
                console.log(error)
            })
        }
        fetch()
    }, [])

    return (
        <section className='py-14'>
            <div className='responsive flex justify-between items-end w-full border-b'>
                <h2 className='md:text-2xl text-base mb-0'>{t("usefull_links")}</h2>
            </div>
            <div className='responsive mt-12'>
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                    }}
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    spaceBetween={20}
                    slidesPerView={2}
                >
                    {
                        Array.isArray(data) && data.map(item => (
                            <SwiperSlide key={item?.id}>
                                <ServeiceCard item={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default UsifulLinks