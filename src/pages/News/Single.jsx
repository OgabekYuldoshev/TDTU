import React, { useState, useEffect } from 'react'
import PageHeader from "../../components/PageHeader";
import { http } from '../../servises';
import { get } from "lodash"
import { toast } from "react-toastify"
import Parser from "react-html-parser"
import { useTranslation } from 'react-i18next';
import config from '../../config';
import UsifulLinks from '../../components/UsifulLinksSwiper';
import { useParams } from 'react-router';

const Single = () => {
    const { t, i18n } = useTranslation()
    const params = useParams()

    const [data, setData] = useState([])
    const [meta, setMeta] = useState({
        totalItems: 0,
        current: 0
    })

    useEffect(() => {
        if (params.id) {
            const fetch = async () => {
                await http.request.get(`/public/api/news/${params.id}`).then((res => {
                    const resData = get(res, 'data.data')
                    setData(resData)
                })).catch((error) => {
                    toast.error("Error: " + error)
                    console.log(error)
                })
            }
            fetch()
        }
    }, [params])

    return (
        <div className='py-14'>
            <PageHeader title={get(data, `title_${i18n.language}`)} paths={[
                {
                    title: 'news',
                    path: '/news',
                },
                {
                    title: get(data, `title_${i18n.language}`),
                }
            ]} />
            <div className='responsive'>
                <img className='w-full rounded-lg mb-5' src={config.api.base_url + "/storage/" + get(data, `img`)} alt="title-photo" />
                <p>{Parser(get(data, `text_${i18n.language}`))}</p>
            </div>
            <div className='mt-10'>
                <h2 className='border-b responsive md:text-2xl text-base'>{t('photo_plates')}</h2>
                <div className='grid md:grid-cols-2 grid-cols-1 responsive gap-5 mt-10'>
                    <img src={config.api.base_url + "/storage/" + get(data, `image_1`)} alt="" />
                    <img src={config.api.base_url + "/storage/" + get(data, `image_2`)} alt="" />
                </div>
            </div>
            <UsifulLinks />
        </div>
    )
}

export default Single