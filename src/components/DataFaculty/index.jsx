import React from 'react'
import {useTranslation} from "react-i18next"

export default function DataFaculty({name}) {

    const {t} = useTranslation()

    return (
        <>
            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t(name)}</h2>
            </div>
            <div className='responsive flex flex-col gap-5 mt-5'>
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    5310100- Energetika (tarmoqlar bo’yicha) <br/>
                    5312100- Energiya tejamkorligi va energoaudit <br/>
                    5310700- Elektr texnikasi, elektr mexanikasi va elektr texnologiyasi (elektr mashinasozligi)
                </p>
            </div>
        </>
    )
}