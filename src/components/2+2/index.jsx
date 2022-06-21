import React from "react"
import img from "./img.png";
import "./scss/main.scss"
import ButtonCom from "../ButtonCom";

export default function TwoPlusTwo() {
    return (
        <div className={"twoPlusTwo"}>
            <div className="twoPlusTwo__item">
                <img className="twoPlusTwo__item__img" src={img} alt="twoPlusTwo"/>
                <div className="twoPlusTwo__item__info flex flex-col justify-between">
                    <span className="twoPlusTwo__item__info__text">To’lov-shartnoma bo’yicha</span>
                    <div className={"w-full"}>
                        <div className="float-right">
                            <ButtonCom text={"Batafsil ma’lumot"} textColor={"text-black"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}