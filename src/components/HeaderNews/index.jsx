// import React from "react"
// import "./scss/main.scss"
// import {Swiper, SwiperSlide} from "swiper/react";
// import {Autoplay, Pagination, Navigation} from "swiper";
// import img from "../../assets/png/news-card-img-fake.png";
// import back from "../../assets/png/back-header.png"
//
// export default function HeaderNews() {
//     return (
//         <header className={"header_news mt-5 border"}>
//             <div className="slide flex flex-col p-0 relative overflow-hidden">
//                 <div className='slide__back w-full absolute'>
//                     <img className='slide__back__img border opacity-20 w-full absolute' src={back} alt=""/>
//                 </div>
//                 <div className="swiper_slide">
//                     <div id={"div"}>
//                         <h4>djkgnsdkdf tbglsdfnv dfgrwegsd</h4>
//                         <p>dhbgkjdds  jbdgrjdsf vkjbdsj vjks jshrbgs fjsdbgajd lkjsbdfv jkhb jd ljsd</p>
//                     </div>
//                     <img className="myImg" src={img} alt=""/>
//                 </div>
//             </div>
//         </header>
//     )
// }

import React, {useRef, useState, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import back from "../../assets/png/back-header.png"

import "./scss/main.scss";

import {Autoplay, Pagination, Navigation} from "swiper";
import ButtonCom from "../ButtonCom";
import {Input} from "antd";

export default function HeaderNews() {

    const [top, setTop] = useState([])
    const [text, setText] = useState('fade-in')

    useEffect(() => {
        const myFunc = async () => {
            const topProm = await fetch('https://politexapi.na4u.ru/api/news')
            const promJson = await topProm.json()
            setTop(promJson.data)
        }
        myFunc()
    }, [])

    setTimeout(() => {
        setText('fade-out');
    }, 3500);

    return (
        <div className="mySlide">
            <div className='mySlide__back'>
                <img className='mySlide__back__img' src={back} alt=""/>
            </div>
            <Swiper
                spaceBetween={300}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay]}
                className="myContainer mySwiper "
            >

                {
                    top.map((element, index) => {
                        return <SwiperSlide className="mySwiperSlide" key={index}>
                            <div className="myDiv flex flex-col justify-between">
                                <div className="">
                                    <h4 dangerouslySetInnerHTML={{__html: element.title_uz}}/>
                                    <p dangerouslySetInnerHTML={{__html: element.text_uz}}/>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="range_btn">
                                    </div>
                                    <ButtonCom textColor={"text-black"} text={"Batafsil"}/>
                                </div>
                            </div>
                            <img className="myImg" src={'https://politexapi.na4u.ru/public/storage/' + element.image_2}
                                 alt=""/>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
}
