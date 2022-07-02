import React from 'react'
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import {useTranslation} from "react-i18next"

export default function Hymn() {

    const {t} = useTranslation()

    return (
        <div>
            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('hymn')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5 items-center'>
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6 mt-5"}>
                    {t("hymn_text")}
                </p>
            </div>
            <UsifulLinks/>
        </div>
    )
}