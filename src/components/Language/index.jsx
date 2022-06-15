import { TiArrowSortedDown } from "react-icons/ti"
import { Dropdown, Space } from 'antd';
import React from 'react';
import uz from "../../assets/png/uz.png"
import ru from "../../assets/png/ru.png"
import en from "../../assets/png/us.png"
import { useTranslation } from "react-i18next";

const Languages = () => {
    const { i18n } = useTranslation()
    const languages = [
        {
            value: "uz",
            name: 'UZ',
            icon: uz
        },
        {
            value: "ru",
            name: 'RU',
            icon: ru
        },
        {
            value: "en",
            name: 'EN',
            icon: en
        }
    ]

    const menu = (
        <div className='bg-primary_lightgray bg-opacity-90 rounded overflow-hidden'>
            {
                languages.filter(item => item.value !== i18n.language).map((item) => (
                    <button key={item.value} onClick={() => i18n.changeLanguage(item.value)} className="px-6 py-2 flex hover:bg-white gap-2 duration-300 cursor-pointer">
                        <img width={20} src={item.icon} alt={item.name} />
                        <span>{item.name}</span>
                    </button>
                ))
            }
        </div>
    )

    const language = languages.find(item => item.value === i18n.language)

    return (
        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
            <Space className="cursor-pointer">
                <img width={20} src={language.icon} alt={language.name} />
                <span>{language.name}</span>
                <TiArrowSortedDown />
            </Space>
        </Dropdown>
    )
}

export default React.memo(Languages)