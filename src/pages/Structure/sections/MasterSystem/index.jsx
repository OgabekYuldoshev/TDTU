import React from 'react'
import HeaderImg from "../../../../components/HeaderImg"
import {useTranslation} from "react-i18next"
import UsifulLinks from "../../../../components/UsifulLinksSwiper"

export default function MasterSystem() {

    const {t} = useTranslation()

    return (
        <>
            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('master_system')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5'>
               {/*<RectorCard/>*/}
                RectorCard
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    {t("master_system_text")}
                </p>
            </div>
            <UsifulLinks />
        </>
    )
}