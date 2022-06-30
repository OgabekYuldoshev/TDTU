import React from 'react'
import Button from '../Button'
import Logo from "../../assets/png/logo.png"
import config from '../../config'
import { get } from "lodash"
import { useTranslation } from 'react-i18next'
import HtmlParser from "react-html-parser"
import moment from "moment"
import { useNavigate } from "react-router-dom"

const NewsCard = ({ item }) => {
    const { i18n, t } = useTranslation()
    const navigate = useNavigate()
    return (
        <div className='group relative rounded-lg bg-white shadow overflow-hidden'>
            <img className='group-hover:h-full h-[200px] w-full object-cover object-center duration-300 z-5 absolute top-0 left-0' src={`${config.api.base_url  }/storage/${  get(item, 'img')}`} alt="newsImage" />
            <div className='group-hover:h-full group-hover:bg-black h-[200px] absolute top-0 left-0 w-full duration-300 z-10 group-hover:bg-opacity-50'>
                <div className='relative w-full h-full'>
                    <div className='m-5 flex items-center gap-3 duration-300 absolute top-24 left-0 group-hover:top-0 h-fit'>
                        <img src={Logo} className="w-16" alt="logo" />
                        <p className='text-white text-base font-semibold w-1/2 mb-0'>{t("university_name")}</p>
                    </div>
                </div>
            </div>
            <div className='relative z-20 mt-[200px] p-[30px]'>
                <h2 className='text-base group-hover:text-white duration-300'>{get(item, `title[${i18n.language}]`)}</h2>
                <div className='group-hover:text-white duration-300 h-[150px] overflow-hidden'>
                    {HtmlParser(get(item, `content[${i18n.language}]`))}
                </div>
                <div className='flex justify-between'>
                    <span className='group-hover:text-white duration-300'>{moment(get(item, "createdAt")).format("LLLL")}</span>
                    <span className='group-hover:block hidden'>
                        <Button onClick={() => navigate(`/news/${get(item, "id")}`)} className="px-2 group-hover:text-white" title="Batafsil" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard