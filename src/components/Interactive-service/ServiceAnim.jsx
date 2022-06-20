import React from "react"
import "./scss/main.scss"
import Interactive from "../../assets/svg/interactive.svg"
import InterAir from "../../assets/svg/inter-air.svg"
import leaf from "../../assets/svg/leaf.svg"
import InterCloud from "../../assets/svg/inter-cloud.svg"
import InterRot from "../../assets/svg/rot.svg"
import InterRotMini from "../../assets/svg/rot-mini.svg"

export default function ServiceAnim() {
    return (
        <div className="in__items__img flex relative w-1/2 h-full">
            <img className='big w-11/12 absolute z-[2]' src={Interactive} alt=""/>
            <div className='airDiv rounded-full relative w-[90%] h-[67%]'>
                <img className='air top-[-22px] left-[46%] absolute w-[80px]' src={InterAir} alt=""/>
            </div>
            <img className='leaf top-3.5 left-[125px] absolute z-[1]' src={leaf} alt=""/>
            <img className='cloud z-[1] top-[12%] left-[75%] absolute' src={InterCloud} alt=""/>
            <img className='rot z-[1] top-[-77px] left-[42%] absolute' src={InterRot} alt=""/>
            <img className='rot2 z-[1] top-[21%] left-[53%] absolute' src={InterRotMini} alt=""/>
        </div>
    )
}