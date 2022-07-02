import React from 'react'
import {useTranslation} from "react-i18next"
import UsifulLinks from "../../../../components/UsifulLinksSwiper"

export default function Science() {

    const {t} = useTranslation()

    return (
        <div>
            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('science')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5'>
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    {t("science_text")}
                </p>
            </div>
            <UsifulLinks />
        </div>
    )
}