import React from 'react'
import HeaderImg from "../../../components/HeaderImg"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import {useTranslation} from "react-i18next"

export default function Branches() {

    const {t} = useTranslation()

    return (
        <div>
            <HeaderImg text={"branches"} paths={[
                {
                    title: 'branches'
                }
            ]}/>

            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('branches')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5'>
                {/*<RectorCard/>*/}
                RectorCard
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    {t("branches_text")}
                </p>
            </div>
            <UsifulLinks />
        </div>
    )
}