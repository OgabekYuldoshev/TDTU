import React from 'react'
import { Napa, PolitexTexture } from '../../assets/svg'
import Logo from "../../assets/png/logo.png"
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
const Footer = () => {
    const { t } = useTranslation()
    const links = [
        {
            name: t('university'),
            link: '/unversity'
        },
        {
            name: t('electron_library'),
            link: '/unversity'
        },
        {
            name: t('schema'),
            link: '/unversity'
        },
        {
            name: t('finansical_activity'),
            link: '/unversity'
        },
        {
            name: t('activity'),
            link: '/unversity'
        },
        {
            name: t('grand_projects'),
            link: '/unversity'
        },
        {
            name: t('news'),
            link: '/unversity'
        },
        {
            name: t('elective_course'),
            link: '/unversity'
        },
        {
            name: t('students'),
            link: '/unversity'
        },
        {
            name: t('scientific_journal'),
            link: '/unversity'
        },
        {
            name: t('abiturents'),
            link: '/unversity'
        },
        {
            name: t('corruption_free_sector'),
            link: '/unversity'
        },
        {
            name: t('hemis'),
            link: '/unversity'
        }
    ]

    return (
        <footer>
            <div className='bg-primary_green xl:px-[140px] md:px-[60px] sm:px-[30px] px-[15px] text-white relative overflow-hidden'>
                <h2 className='md:text-2xl z-20 relative text-center font-bold text-white mt-[60px]'>
                    {t("university_name")}
                </h2>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:my-[106px] my-[50px] justify-center gap-5 z-20 relative'>
                    <div className='hidden md:block'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        {
                            links.map(link => <Link className='font-base text-white sm:bg-transparent bg-primary_lightgray bg-opacity-50 sm:text-start text-center px-5 py-2 rounded' key={link.name} to={link.link}>{link.name}</Link>)
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
            <div className='bg-primary_green_darken xl:px-[140px] md:px-[60px] sm:px-[30px] px-[15px] text-white py-[12px] flex justify-between items-center'>
                <span>
                    © TDTU 2022
                </span>
                <span className='text-sm'>
                    <Napa />
                </span>
            </div>
        </footer>
    )
}

export default Footer