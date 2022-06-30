import React from 'react'
import HeaderImg from "../../../components/HeaderImg"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import RectorCard from '../../../components/RectorCard'
import { useTranslation } from 'react-i18next'
import useList from '../../../modules/hooks/useRectorat'

export default function Structure() {
    const { t } = useTranslation()
    const { items } = useList()

    return (
        <>
            <HeaderImg text={"rectorate"} paths={[
                {
                    title: 'rectorate'
                }
            ]} />

            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('rectorate')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5'>
                {
                    Array.isArray(items) && items.map(item => <RectorCard key={item.id} item={item} />)
                }
            </div>
            <UsifulLinks />
        </>
    )
}