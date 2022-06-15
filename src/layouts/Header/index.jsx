import React, { useState } from 'react'

import { FaPhone } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { BsMusicNoteBeamed } from "react-icons/bs"
import Gerb from "../../assets/png/gerb.png"
import Flag from "../../assets/png/uz.png"
import Logo from "../../assets/png/logo.png"
import { Link } from "react-router-dom"
import Languages from '../../components/Language'
import Tools from '../../components/Tools'
import Menu from '../Menu'

const Header = () => {
    const [language, setLanguage] = useState(false)
    const links = [
        {
            name: "Moliyaviy Faoliyat",
            link: ''
        },
        {
            name: "Elektron Kutubhona",
            link: ''
        },
        {
            name: "Tayyorlov kursi",
            link: ''
        },
        {
            name: "Hemis",
            link: ''
        }
    ]
    return (
        <header>

            <div className='bg-primary_green_darken md:px-[140px] px-[60px] text-white py-[12px] flex justify-end items-center gap-8'>
                <div className='flex gap-2 items-center'>
                    <FaPhone />
                    <span>+998 71 246-46-00</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineMail />
                    <span>tstu_info@tdtu.u</span>
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <Tools />

                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <img src={Gerb} alt="gerb" width="75%" />
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <img src={Flag} alt="fleg" width="75%" />
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <BsMusicNoteBeamed fontSize={24} />
                </div>
            </div>
            <div className='bg-primary_green md:px-[140px] px-[60px] py-[20px] pb-[40px] flex justify-between items-center relative'>
                <div className='flex gap-[20px] items-center cursor-pointer'>
                    <img src={Logo} alt="logo" className='w-[110px]' />
                    <h1 className='text-xl font-bold text-white'>Islom Karimov nomidagi Toshkent Davlat Texnika Universiteti</h1>
                </div>
                <div className='text-white text-base flex items-center justify-end gap-8 w-4/5'>
                    {
                        links.map(item => (
                            <Link className='text-white' key={item.name} to={item.link}>{item.name}</Link>
                        ))
                    }
                    <Languages />
                </div>
                {/* <Menu /> */}
            </div>


        </header>
    )
}

export default Header