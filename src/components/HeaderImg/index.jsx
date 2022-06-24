import React from 'react'
import {useTranslation} from "react-i18next";

const HeaderImg = ({text}) => {

    const {t} = useTranslation()

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
                    <span className={"font-extrabold text-5xl text-white uppercase"}>{t(`${text}`)}</span>
                    <svg className={"w-full"} height="33" viewBox="0 0 1137 33" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2.5H527L567.75 30.5L608.5 2.5H1134.5" stroke="white" stroke-width="4"
                              stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default HeaderImg