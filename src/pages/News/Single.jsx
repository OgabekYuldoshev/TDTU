import React from 'react'
import PageHeader from "../../components/PageHeader"
import { get } from "lodash"
import Parser from "react-html-parser"
import { useTranslation } from 'react-i18next'
import config from '../../config'
import UsifulLinks from '../../components/UsifulLinksSwiper'
import { useParams } from 'react-router'
import Spinner from '../../components/Spinner'
import useSingle from '../../modules/hooks/useNewsSingle'

const Single = () => {
    const { t, i18n } = useTranslation()
    const params = useParams()
    const { item, isLoading } = useSingle({ id: params?.id })

    return (
        <div className='py-14'>
            <PageHeader title={get(item, `title[${i18n.language}]`)} paths={[
                {
                    title: 'news',
                    path: '/news'
                },
                {
                    title: get(item, `title[${i18n.language}]`)
                }
            ]} />
            <div className='responsive'>
                <img className='w-full rounded-lg mb-5' src={`${config.api.base_url}/storage/${get(item, `img`)}`} alt="title-photo" />
                <div>{Parser(get(item, `content[${i18n.language}]`))}</div>
            </div>
            <div className='mt-10'>
                <h2 className='border-b responsive md:text-2xl text-base'>{t('photo_plates')}</h2>
                <div className='grid md:grid-cols-2 grid-cols-1 responsive gap-5 mt-10'>
                    <img src={`${config.api.base_url}/storage/${get(item, `img1`)}`} alt="" />
                    <img src={`${config.api.base_url}/storage/${get(item, `img2`)}`} alt="" />
                </div>
            </div>
            {isLoading && <Spinner />}
            <UsifulLinks />
        </div>
    )
}

export default Single