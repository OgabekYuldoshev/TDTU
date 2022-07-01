import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '../Button'
import NewsCard from '../NewsCard'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { Autoplay } from 'swiper'
import useList from '../../modules/hooks/useNewsHomeList'

const NewsSection = () => {
    const { items, isLoading } = useList()
    console.log(items)
    const { t } = useTranslation()
    const navigate = useNavigate()


    return (
        <section className='py-14'>
            <div className='responsive flex justify-between items-end w-full border-b'>
                <h2 className='md:text-2xl text-base mb-0'>{t('news_and_announcements')}</h2>
                <div>
                    <Button className="px-2 py-1" title={t('view_all')} onClick={() => navigate('/news')} />
                </div>
            </div>
            <div className='responsive mt-5'>
                {
                    isLoading ? <h2>{t('loading')}</h2> : (
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
                                    slidesPerView: 3,
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
                                Array.isArray(items) && items.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <NewsCard item={item} />
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

export default NewsSection