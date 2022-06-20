import React from 'react'
import Logo from "../../assets/png/logo.png"
import LogoGreen from "../../assets/png/logoGreen.png"
import { Link, useNavigate } from "react-router-dom"
import Language from '../../components/Language'
import TopHead from '../../components/TopHead'

import { useTranslation } from 'react-i18next'
import { menus, paths } from '../menu'
import { CaretDownOutlined, CloseOutlined } from '@ant-design/icons'
import { Item, List } from '../../components/Collapse'

const DesktopMenu = ({ menu, onClose = () => null }) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div className={`${menu ? 'fixed bg-white w-full top-0 left-0 z-50 h-full text-black overflow-auto' : 'flex pt-[18px] pb-[30px] items-center justify-between'} `}>
            {
                menu ? (
                    <>
                        <TopHead />
                        <div className='py-[18px] flex items-center justify-between xl:px-[140px] md:px-[60px]'>
                            <Link to="/" className='flex items-center gap-5 max-w-md'>
                                <img className='w-24' src={LogoGreen} alt="logo" />
                                <h1 className={`text-primary_green text-2xl max-w-md font-bold`}>{t('university_name')}</h1>
                            </Link>
                            <div className='max-w-md text-lg font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/" className='flex items-center gap-5'>
                            <img className='w-24' src={Logo} alt="logo" />
                            <h1 className={`text-white text-2xl max-w-md font-bold`}>{t('university_name')}</h1>
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
                    </>
                )
            }

            {
                menu && (
                    <div
                        className=' xl:px-[140px] md:px-[60px] block'>
                        <ul className='border-t border-b border-primary_green py-5 flex items-center justify-between gap-10 px-5'>
                            <li>
                                <Link className='text-black font-semibold' to="/constact">
                                    {t("contact")}
                                </Link>
                            </li>
                            <li>
                                <Link className='text-black font-semibold' to="/admission">
                                    {t("admission")}
                                </Link>
                            </li>
                            {
                                paths.map(item => (
                                    <li key={item.title}>
                                        <Link className='text-black font-semibold' to={item.path}>
                                            {t(item.title)}
                                        </Link>
                                    </li>
                                ))
                            }
                            <Language />
                            <CloseOutlined onClick={onClose} className='text-xl cursor-pointer' />
                        </ul>
                        <div className={`grid grid-cols-8 h-full overflow-y-auto`}>
                            {
                                menus.map(menu => (
                                    <div key={menu.title} className=' min-h-max border-l px-3 flex flex-col gap-5'>
                                        {
                                            menu.path ? <Link to={menu?.path} className='text-center text-black font-semibold cursor-pointer hover:text-primary_green'>{t(menu.title)}</Link> :
                                                <span className='text-center text-black font-semibold cursor-pointer hover:text-primary_green'>{t(menu.title)}</span>
                                        }
                                        {
                                            menu?.children?.map(item => !!item?.children ? (
                                                <List key={item?.title}>
                                                    <Item key={item?.title} header={
                                                        <div className='cursor-pointer flex justify-between items-center w-full'>
                                                            <span>{t(item?.title)}</span>
                                                            <CaretDownOutlined />
                                                        </div>
                                                    }>
                                                        <ul className='flex flex-col gap-3 mt-3'>
                                                            {
                                                                item?.children.map(obj => !!obj.children ? (
                                                                    <List key={obj?.title}>
                                                                        <Item key={obj?.title} header={
                                                                            <div className='cursor-pointer flex justify-between items-center w-full'>
                                                                                <span>{t(obj?.title)}</span>
                                                                                <CaretDownOutlined />
                                                                            </div>
                                                                        }>
                                                                            <ul className='flex flex-col gap-3 mt-3'>
                                                                                {
                                                                                    obj?.children.map(obj => <li key={obj?.title} onClick={() => navigate(obj?.path)} className='flex justify-between items-center cursor-pointer'>
                                                                                        <span>{t(obj?.title)}</span>
                                                                                    </li>)
                                                                                }
                                                                            </ul>
                                                                        </Item>
                                                                    </List>
                                                                ) : (
                                                                    <li key={obj?.title} onClick={() => navigate(obj?.path)} className='flex justify-between items-center cursor-pointer'>
                                                                        <span>{t(obj?.title)}</span>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </Item>
                                                </List>
                                            ) : (
                                                <li key={item?.title} onClick={() => navigate(item?.path)} className='flex justify-between items-center cursor-pointer'>
                                                    <span>{t(item?.title)}</span>
                                                </li>
                                            ))
                                        }
                                    </div>

                                ))
                            }
                        </div>
                    </div>


                )
            }
        </div>
    )
}

export default DesktopMenu