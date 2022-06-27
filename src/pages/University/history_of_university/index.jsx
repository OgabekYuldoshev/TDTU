import { useState } from 'react'
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import { useTranslation } from "react-i18next"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from "swiper"
import HeaderImg from "../../../components/HeaderImg"
import HistoryCard from '../../../components/HistoryCard'

const HistoryUniversity = () => {
    const { t } = useTranslation()
    const [switcher, setSwitcher] = useState(false)
    return (
        <div>
            <HeaderImg text={"history_of_university"} />
            <div className='mt-5'>
                <div className='responsive border-b'>
                    <div className='flex items-center justify-center w-fit'>
                        <div onClick={() => setSwitcher(false)} className={`${!switcher ? "bg-primary_green text-white" : "bg-white"} rounded-t-lg  py-2 px-4 shadow cursor-pointer font-semibold lg:w-[400px] w-[200px] flex items-center justify-center duration-300`}>
                            {t('history_of_university')}
                        </div>
                        <div onClick={() => setSwitcher(true)} className={`${switcher ? "bg-primary_green text-white" : "bg-white"} rounded-t-lg  py-2 px-4 shadow cursor-pointer font-semibold lg:w-[400px] w-[200px] flex items-center justify-center duration-300`}>
                            {t('famous_graduates')}
                        </div>
                    </div>
                </div>
                <div className='responsive mt-10'>
                    {
                        !switcher ? (
                            <div>
                                <p className='lg:text-xl md:text-base lg:leading-9 leading-6'>
                                    Oʻzbekiston Prezidentining 1991-yil 30-apreldagi farmoniga asosan Vazirlar Mahkamasi 1991-yil 13-mayda qabul qilgan 130-sonli qarori bilan Toshkent politexnika instituti va Toshkent mashinasozlik instituti birlashtirilishi zaminida vujudga keldi. Ayni vaqtda Vazirlar mahkamasi sanoat-fuqarolik qurilishi, qurilish muhandisligi, meʼmorchilik fakultetlarini birlashtirib — Toshkent arxitektura-qurilish instituti, kimyo-texnologiya, oziq-ovqat texnologiyasi fakultetlarini birlashtirib — Toshkent kimyo-texnologiya instituti tashkil etish haqida ham qaror qabul qilgan boʻlib, amalda ikki institutni birlashtirib, uchta mustaqil oliy texnika oʻquv yurtlari- Toshkent davlat texnika universiteti,Toshkent meʼmorchilik-qurilish instituti, Toshkent kimyo-texnologiya instituti tashkil etilgan edi. Navbatdagi qayta qurishlardan Toshkent politexnika institutining: „geologiya-qidiruv“, „kon-metallurgiya“, „avtomatlashtirilgan boshqaruv tizimlari“, „sanoat energetikasi“, „neft va gaz“, „radioelektronika va avtomatika“, „energetika fakultetlari“. Toshkent mashinosozlik institutining: mexanika; texnologiya; mashinalar va apparatlarni konstruksiyalash; traktor va qishloq xoʻjaligi mashinasozligi fakultetlari bilan qoʻshilib, yangi — Toshkent davlat texnika universiteti tarkibi yaratildi va yangi maqomda amal qila boshladi.
                                </p>
                                <Swiper
                                    modules={[EffectFade, Autoplay]}
                                    effect={"slide"}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false
                                    }}
                                    spaceBetween={50}
                                    slidesPerView={2}
                                >
                                    {
                                        Array(6).fill().map(item => (
                                            <SwiperSlide key={item}>
                                                <div className=''>
                                                    <div className=''>
                                                        <img width={800} height={480} className="object-cover object-center rounded-lg shadow-lg"
                                                            src='https://images.unsplash.com/photo-1655748403948-96f04e5f2cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80' />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        ) : (
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 w-full'>
                                {
                                    Array(6).fill().map(item => <HistoryCard key={item} />)
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <UsifulLinks />
        </div>
    )
}

export default HistoryUniversity