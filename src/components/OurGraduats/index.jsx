import React, { useState, useEffect } from 'react'
import CardStudent from '../CardStudent'
import { toast } from 'react-toastify'
import { http } from '../../servises'
import { get } from "lodash"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { useTranslation } from 'react-i18next'

const OurGraduats = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation()
    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            await http.request.get("/public/api/graduats").then((res => {
                const resData = get(res, 'data.data')
                setData(resData)
                setLoading(false)
            })).catch((error) => {
                toast.error(`Error: ${  error}`)
                setLoading(false)
                console.log(error)
            })
        }
        fetch()
    }, [])


    return (
        <section className='py-14'>
            <div className='responsive flex justify-between items-end w-full border-b'>
                <h2 className='md:text-2xl text-base mb-0'>Biznning Bitiruvchilar</h2>
            </div>
            <div className='responsive mt-5'>
                {
                    loading ? <h2>{t('loading')}</h2> : (
                        <Swiper
                            modules={[Autoplay]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 40
                                }
                            }}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            spaceBetween={50}
                            slidesPerView={1}
                        >
                            {
                                Array.isArray(data) && data.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <CardStudent item={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    )
                }

            </div>
        </section>
    )
}

export default OurGraduats