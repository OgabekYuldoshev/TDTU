import React from 'react'
import HeaderImg from "../../../components/HeaderImg"
import {useTranslation} from "react-i18next"

export default function Bachelor() {

    const {t} = useTranslation()

    return (
        <div>
            <HeaderImg text={"students"} paths={[
                {
                    title: 'students'
                }
            ]}/>

            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('bachelor')}</h2>
            </div>
            jmdbfkjadb
        </div>
    )
}