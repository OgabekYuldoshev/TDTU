import React from 'react'
import Logo from "../../assets/png/logo.png"
import { Link } from "react-router-dom"
import Language from '../../components/Language'
import { useTranslation } from 'react-i18next'
import { paths } from '../menu'
const DesktopMenu = () => {
    const { t } = useTranslation()

    return (
        <div className='pt-[18px] pb-[30px] flex items-center justify-between'>
            <Link to="/" className='flex items-center gap-5'>
                <img className='w-24' src={Logo} alt="logo" />
                <h1 className='text-white text-2xl max-w-md font-bold'>{t('university_name')}</h1>
            </Link>
            <ul className='text-base flex gap-5'>
                {
                    paths.map(item => (
                        <li>
                            <Link className='text-white' to={item.path}>
                                {t(item.title)}
                            </Link>
                        </li>
                    ))
                }
                <Language />
            </ul>
        </div>
    )
}

export default DesktopMenu