import React from 'react'
import data from "./utils/fakedata"
import {Card} from "antd"
import "./scss/main.scss"
import img from "../../assets/png/news-card-img-fake.png"
import logo from "../../assets/png/logo-color.png"
import ButtonCom from "../ButtonCom";

export default function ComponentCard() {
    return (
        <div className={"news mt-[30px] mb-[30px]"}>
            <div className="news__box__card transition-all rounded-3xl flex
            justify-self-auto flex-wrap cursor-pointer gap-[40px] w-1/4 h-[600px] relative overflow-hidden box-border">
                <img className='news__box__card__img absolute w-full h-3/6' src={img} alt=""/>
                <div className='news__box__card__logo flex absolute w-7/12 top-56 left-8 items-center z-10 gap-1'>
                    <img src={logo} alt="logo-university" className={"w-16"}/>
                    <div className={"font-extrabold text-base text-white"}>
                        Toshkent Davlat Texnika Universiteti
                    </div>
                </div>
                <div className='news__box__card__texts absolute mt-[300px] px-[25px] py-[15px] z-[2] text-lg'>
                    <h4 className={"text-xl font-semibold tracking-wide h-[88px] overflow-hidden text-ellipsis"}>
                        TDTU va hamkor OTMlar rahbariyati hamda o'qishlarini ikkinchi bosqichini Minsk shahrida davom
                        ettirayotgan talabalar bilan onlayn-uchrashuv o'tkazildi!
                    </h4>
                    <p className={"font-normal h-[100px] overflow-y-auto break-all text-lg overflow-hidden text-ellipsis"}>kjadnfksjnfsljdfnlskjdcnslkjdfrfna;knckjsdnf;eoirnfhksdjnvskldfjvnakefnksjd</p>

                    <div className='news__box__card__texts__bottom flex justify-between items-center absolute top-[255px]'>
                        <p className={"text-lg tracking-wide font-light"}>14:35  12.03.2022</p>
                        <ButtonCom text={"Batafsil"} textColor={"text-white"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}