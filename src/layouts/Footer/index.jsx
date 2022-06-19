import React from 'react'
import { Napa, PolitexTexture } from '../../assets/svg'
import Logo from "../../assets/png/logo.png"
import { Link } from 'react-router-dom'
const Footer = () => {
    const links = [
        {
            name: 'Unversitet',
            link: '/university'
        },
        {
            name: 'Elektron Kutubxona',
            link: '/university'
        },
        {
            name: 'Tuzilma',
            link: '/university'
        },
        {
            name: 'Moliyaviy Faoliyat',
            link: '/university'
        },
        {
            name: 'Faoliyat',
            link: '/university'
        },
        {
            name: 'Grand Loyihalar',
            link: '/university'
        },
        {
            name: 'Yangilklar',
            link: '/university'
        },
        {
            name: 'Tayyorlov Kursi',
            link: '/university'
        },
        {
            name: 'Talabalar',
            link: '/university'
        },
        {
            name: 'Ilmiy Jurnallar',
            link: '/university'
        },
        {
            name: 'Abituriyent',
            link: '/university'
        },
        {
            name: 'Korrupsiyasiz soha',
            link: '/university'
        },
        {
            name: 'Hemis',
            link: '/university'
        }
    ]

    return (
        <footer>
            <div className='bg-primary_green md:px-[140px] px-[60px] text-white relative overflow-hidden'>
                <h2 className='text-[35px] z-20 relative text-center font-bold text-white mt-[60px]'>Islom Karimov Nomidagi Toshkent Davlat Texnika Universiteti</h2>
                <div className='grid grid-cols-3 my-[106px] justify-center gap-5 z-20 relative'>
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='grid grid-cols-2'>
                        {
                            links.map(link => <Link className='font-base text-white' key={link.name} to={link.link}>{link.name}</Link>)
                        }
                    </div>
                    <div>
                        <iframe className='w-full h-full rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.74398629114!2d69.1392823695852!3d41.282770555806366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sru!4v1655208641572!5m2!1sen!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 z-10">
                    <PolitexTexture />
                </div>
            </div>
            <div className='bg-primary_green_darken md:px-[140px] px-[60px] text-white py-[24px] flex justify-between items-center'>
                <span>
                    © TDTU 2022
                </span>
                <span>
                    <Napa />
                </span>
            </div>
        </footer>
    )
}

export default Footer