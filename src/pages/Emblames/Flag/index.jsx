import React from 'react'
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import {useTranslation} from "react-i18next"

export default function Flag() {

    const {t} = useTranslation()

    return (
        <div>
            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('flag')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5 items-center'>
                <img width={450} src="http://geografiya.uz/uploads/posts/2015-04/thumbs/1429392954_uzbekistan-flag.gif" alt=""/>
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6 mt-5"}>
                    {t("flag_text")}
                </p>
            </div>
            <UsifulLinks />
        </div>
    )
}