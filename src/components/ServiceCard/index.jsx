import React from 'react'
import { useTranslation } from 'react-i18next'
import config from "../../config"
import { get } from "lodash"

const ServeiceCard = ({ item }) => {
    const { i18n } = useTranslation()
    return (
        <a href={get(item, 'link')} target="_blank" className='w-full cursor-pointer bg-white py-5 h-fit shadow rounded-lg hover:shadow-lg duration-300 gap-4 grid grid-cols-1 px-7'>
            <div className='flex justify-center'>
                <img src={`${config.api.base_url}/storage/${get(item, 'img')}`} className="w-full h-40 object-cover object-center" alt="student" />
            </div>
            <h2 className='text-center text-lg font-bold mb-0'>{get(item, `text[${i18n.language}]`)}</h2>
        </a>
    )
}

export default ServeiceCard