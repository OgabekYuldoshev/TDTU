import React from 'react'
import PageHeader from "../../../components/PageHeader"
import ServiceCard from "../../../components/ServiceCard"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import {useTranslation} from "react-i18next"

const RegulatoryDoc = () => {

    const { t } = useTranslation()

    return (
        <div className='md:pt-14 pb-5'>
            <PageHeader title='regulatory_documents' paths={[
                {
                    title: 'regulatory_documents'
                }
            ]} />
            <div className='responsive'>
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    {t("regulatory_documents")}
                </p>
            </div>
            <UsifulLinks/>
        </div>
    )
}

export default RegulatoryDoc