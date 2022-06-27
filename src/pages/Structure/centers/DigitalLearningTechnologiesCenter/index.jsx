import React from 'react'
import HeaderImg from "../../../../components/HeaderImg"
import {useTranslation} from "react-i18next"

export default function DigitalLearningTechnologiesCenter() {

    const {t} = useTranslation()

    return (
        <>
            <HeaderImg text={"digital_learning_technologies_center"} paths={[
                {
                    title: 'digital_learning_technologies_center'
                }
            ]}/>

            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('digital_learning_technologies_center')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5'>
               {/*<RectorCard/>*/}
                RectorCard
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    {t("digital_learning_technologies_center_text")}
                </p>
            </div>
        </>
    )
}