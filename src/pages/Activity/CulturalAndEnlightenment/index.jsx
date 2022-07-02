import React from 'react'
import {useTranslation} from "react-i18next"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import PageHeader from "../../../components/PageHeader"

export default function CulturalAndEnlightenment() {

    const {t} = useTranslation()

    return (
        <div className='md:pt-14 pb-5'>
            <PageHeader title='cultural_and_enlightenment' paths={[
                {
                    title: 'cultural_and_enlightenment'
                }
            ]}/>
            <div className='responsive flex flex-col gap-5'>
                <p className='lg:text-xl md:text-base lg:leading-9 leading-6'>
                    {t("cultural_and_enlightenment_text")}
                </p>
            </div>
            <UsifulLinks/>
        </div>
    )
}