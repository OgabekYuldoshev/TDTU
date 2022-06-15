import React from 'react'
import TopHead from '../../components/TopHead'
import Logo from "../../assets/png/logo.png"
import { Link } from "react-router-dom"
import Languages from '../../components/Language'
import { BiMenuAltRight } from "react-icons/bi"
import { useTranslation } from 'react-i18next'
import MobileMenu from '../../components/MobileMenu'
import {links, menus} from "../menu"
const Header = () => {
    const { t } = useTranslation()

    return (
        <header>
            {/* <MobileMenu links={links} menus={menus} /> */}
            <TopHead />
            <div className={`bg-primary_green xl:px-[140px] md:px-[60px] sm:px-[30px] px-[15px] py-[20px] md:pb-[40px] flex justify-between items-center relative`}>
                <div className='flex gap-5 items-center cursor-pointer md:max-w-md max-w-sm'>
                    <img src={Logo} alt="logo" className='md:w-24 sm:w-12 w-10' />
                    <h1 className='md:text-xl sm:text-lg text-sm font-bold text-white'>
                        {t('university_name')}
                    </h1>
                </div>
                <div className='text-white text-base md:flex hidden items-center justify-end gap-8 w-4/5'>
                    {
                        links.map(item => (
                            <Link className='text-white' key={item.name} to={item.link}>{item.name}</Link>
                        ))
                    }
                    <Languages />
                </div>
                <div className='md:hidden block cursor-pointer'>
                    <BiMenuAltRight fontSize={26} className="text-white" />
                </div>
            </div>
        </header>
    )
}

export default Header