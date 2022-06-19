import React from "react"
import "./buttonCom.scss"

export default function ButtonCom({text, onClick, textColor}){
    return(
        <button className="text-center border-transparent flex flex-col items-center justify-center
                         relative bg-transparent text-lg font-normal left-0.5 bottom-1">
            <div id={"div"} className="h-[2px] px-[25px] absolute w-full bottom-0 left-0"/>
            <div id={"p"} className={`mx-2 z-30 ${textColor}`}>{text}</div>
        </button>
    )
}