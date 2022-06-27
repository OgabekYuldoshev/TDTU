import React, { useState, useEffect } from 'react'
import HeaderImg from "../../../components/HeaderImg"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import RectorCard from '../../../components/RectorCard'
import { http } from '../../../servises'
import { toast } from 'react-toastify'
import { get } from "lodash"
import { useTranslation } from 'react-i18next'

export default function Structure() {
    const { t } = useTranslation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            await http.request.get("/public/api/rectorats").then((res => {
                const resData = get(res, 'data.data')
                setData(resData)
                setLoading(false)
            })).catch((error) => {
                toast.error(`Error: ${error}`)
                setLoading(false)
                console.log(error)
            })
        }
        fetch()
    }, [])

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
                    Array.isArray(data) && data.map(item => <RectorCard key={item.id} item={item} />)
                }
            </div>
            <UsifulLinks />
        </>
    )
}