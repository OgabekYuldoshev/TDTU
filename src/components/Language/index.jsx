import { TiArrowSortedDown } from "react-icons/ti"
import { Dropdown, Space } from 'antd'
import React, { useState } from 'react'
import uz from "../../assets/png/uz.png"
import ru from "../../assets/png/ru.png"
import en from "../../assets/png/us.png"

const Languages = () => {
    const languages = [
        {
            id: 1,
            name: 'UZ',
            icon: uz
        },
        {
            id: 2,
            name: 'RU',
            icon: ru
        },
        {
            id: 3,
            name: 'EN',
            icon: en
        }
    ]
    const [language, setLanguage] = useState(languages[0])

    const menu = (
        <div className='bg-primary_lightgray bg-opacity-90 rounded overflow-hidden'>
            {
                languages.filter(item => item.id !== language.id).map((item) => (
                    <button onClick={() => setLanguage(item)} className="px-6 py-2 flex hover:bg-white gap-2 duration-300 cursor-pointer">
                        <img width={20} src={item.icon} alt={item.name} />
                        <span>{item.name}</span>
                    </button>
                ))
            }
        </div>
    )

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

export default Languages