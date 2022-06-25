import React, { useState, useEffect } from 'react'
import PageHeader from "../../components/PageHeader";
import { http } from '../../servises';
import { get } from "lodash"
import { toast } from "react-toastify"
import NewsCard from '../../components/NewsCard';
import UsifulLinks from '../../components/UsifulLinksSwiper';

const News = () => {
    const [data, setData] = useState([])
    const [meta, setMeta] = useState({
        totalItems: 0,
        current: 0
    })

    useEffect(() => {
        const fetch = async () => {
            await http.request.get("/public/api/news/count/15").then((res => {
                const resData = get(res, 'data.data.data')
                setData(resData)
            })).catch((error) => {
                toast.error("Error: " + error)
                console.log(error)
            })
        }
        fetch()
    }, [])

    return (
        <div className='py-10'>
            <PageHeader title='news' paths={[
                {
                    title: 'news',
                }
            ]} />
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 responsive'>
                {
                    Array.isArray(data) && data.map(item => (
                        <NewsCard key={item?.id} item={item} />
                    ))
                }
            </div>
            <UsifulLinks />
        </div>
    )
}

export default News