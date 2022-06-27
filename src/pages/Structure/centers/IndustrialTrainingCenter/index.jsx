import React from 'react'
import HeaderImg from "../../../../components/HeaderImg"
import {useTranslation} from "react-i18next"

export default function IndustrialTrainingCenter() {

    const {t} = useTranslation()

    return (
        <>
            <HeaderImg text={"industrial_training_center"} paths={[
                {
                    title: 'industrial_training_center'
                }
            ]}/>

            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('industrial_training_center')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5'>
               {/*<RectorCard/>*/}
                RectorCard
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    {t("industrial_training_center_text")}
                </p>
            </div>
        </>
    )
}