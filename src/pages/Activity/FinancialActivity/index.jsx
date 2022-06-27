import PageHeader from '../../../components/PageHeader'
import React, { useState, useEffect } from 'react'
import { get } from "lodash"
import { http } from '../../../servises'
import { toast } from 'react-toastify'
import Spinner from '../../../components/Spinner'
import { useTranslation } from 'react-i18next'
import HtmlParser from 'react-html-parser'

const FinancialActivity = () => {
    const { i18n } = useTranslation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            await http.request.get("/public/api/acts").then((res => {
                const resData = get(res, 'data.data')
                setData(resData)
                setLoading(false)
            })).catch((error) => {
                toast.error("Error: " + error)
                setLoading(false)
                console.log(error)
            })
        }
        fetch()
    }, [])


    return (
        <div className='md:py-12 py-5'>
            <PageHeader title="financial_activity" paths={[
                {
                    title: 'financial_activity'
                }
            ]} />
            <ul class="responsive list-disc grid md:grid-cols-2 grid-cols-1 gap-5">
                {
                    Array.isArray(data) && data.map(item => (
                        <li key={get(item, 'id')}>{HtmlParser(get(item, `text_${i18n.language}`))}</li>
                    ))
                }
            </ul>
            {loading && <Spinner />}
        </div>
    )
}

export default FinancialActivity