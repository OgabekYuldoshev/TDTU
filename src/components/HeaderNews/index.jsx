import React from "react"
import "./scss/main.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper";
import img from "../../assets/png/news-card-img-fake.png";
import back from "../../assets/png/back-header.png"

export default function HeaderNews() {
    return (
        <header className={"header_news mt-5 border"}>
            <div className="slide flex flex-col p-0 relative overflow-hidden">
                <div className='slide__back w-full absolute'>
                    <img className='slide__back__img border opacity-20 w-full absolute' src={back} alt=""/>
                </div>
                <div className="swiper_slide">
                    <div id={"div"}>
                        <h4>djkgnsdkdf tbglsdfnv dfgrwegsd</h4>
                        <p>dhbgkjdds  jbdgrjdsf vkjbdsj vjks jshrbgs fjsdbgajd lkjsbdfv jkhb jd ljsd</p>
                    </div>
                    <img className="myImg" src={img} alt=""/>
                </div>
            </div>
        </header>
    )
}