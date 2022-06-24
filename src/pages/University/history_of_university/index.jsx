import React from 'react'
import PageHeader from "../../../components/PageHeader";
import ServiceCard from "../../../components/ServiceCard";
import UsifulLinks from "../../../components/UsifulLinksSwiper";
import {useTranslation} from "react-i18next";
import {Tabs} from 'antd';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Autoplay} from "swiper"
import Button from "../../../components/Button";

const {TabPane} = Tabs;

const HistoryUniver = ({t}) => {
    return (
        <div>
            <p>
                {t("history_univer_text")}
            </p>
            <Swiper
                modules={[EffectFade, Autoplay]}
                effect={"slide"}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className=''>
                        <div className=''>
                            <img width={800} height={480} className="object-cover object-center rounded-lg shadow-lg"
                                 src='https://images.unsplash.com/photo-1655748403948-96f04e5f2cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <div className=''>
                            <img width={800} height={480} className="object-cover object-center rounded-lg shadow-lg"
                                 src='https://images.unsplash.com/photo-1655748403948-96f04e5f2cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <div className=''>
                            <img width={800} height={480} className="object-cover object-center rounded-lg shadow-lg"
                                 src='https://images.unsplash.com/photo-1655748403948-96f04e5f2cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

const Famous = ({t}) => {
  return(
      <div>
            <div className="md:w-full xl:w-1/2 rounded-lg shadow-lg h-20 bg-white flex items-center px-3">
                <img
                    className={"rounded-full w-24 mx-4 object-cover object-center"}
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="graduates"/>
                <div className="flex flex-col">
                    <span className={"md:text-2xl text-xl font-medium"}>Islom karimov Abdug’aniyevich</span>
                    <span className={"md:text-xl text-base font-normal"}>O’zbekiston Respublikasi birinchi prezidenti</span>
                </div>
            </div>
      </div>
  )
}

const HistoryUniversity = () => {

    const {t} = useTranslation()

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className=''>
            <div
                style={{
                    background: "url(https://images.unsplash.com/photo-1655940646105-3f1afd0ecf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
                className={"bg-contain bg-center bg-no-repeat"}>
                <div
                    className="py-[300px] sm:grid-cols-2 grid-cols-1 gap-10 flex flex-col justify-center items-center text-center">
                    <span className={"font-extrabold text-5xl text-white"}>UNIVERSITET TARIXI</span>
                    <svg className={"w-full"} height="33" viewBox="0 0 1137 33" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2.5H527L567.75 30.5L608.5 2.5H1134.5" stroke="white" stroke-width="4"
                              stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
            <div className='responsive mt-5'>
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab={
                        <span className={"hover:bg-primary_green w-96 p-2 px-4 w-full h-full rounded-t-lg text-white "}>
                            {t("history_tdtu")}
                        </span>
                    } key="1">
                        <HistoryUniver t={t}/>
                    </TabPane>
                    <TabPane tab={
                        <span className={"hover:bg-primary_green w-96 p-2 w-full h-full rounded-t-lg text-white "}>
                            {t("famous_graduates")}
                        </span>
                    } key="2">
                        <Famous t={t}/>
                    </TabPane>
                </Tabs>
            </div>
            <UsifulLinks/>
        </div>
    )
}

export default HistoryUniversity