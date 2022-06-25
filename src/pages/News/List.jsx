import React, { useState, useEffect } from 'react'
import PageHeader from "../../components/PageHeader";
import { http } from '../../servises';
import { get } from "lodash"
import { toast } from "react-toastify"
import NewsCard from '../../components/NewsCard';
import UsifulLinks from '../../components/UsifulLinksSwiper';
import Spinner from '../../components/Spinner';
import Paginate from '../../components/Paginate';

const News = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            await http.request.get("/public/api/news/count/15").then((res => {
                const resData = get(res, 'data.data.data')
                setTotal(get(res, 'data.total_number'))
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
            <div className='w-1/2 mt-10 m-auto'>
            <Paginate total={total} />
            </div>
            {loading && <Spinner />}
            <UsifulLinks />
        </div>
    )
}

export default News