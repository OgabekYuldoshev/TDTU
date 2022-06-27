import { AlignRightOutlined, CaretDownOutlined, CaretRightOutlined, CloseOutlined } from '@ant-design/icons'
import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from "../../assets/png/logo.png"
import LogoGreen from "../../assets/png/logoGreen.png"
import { menus, paths } from "../menu"
import { Link, useNavigate } from "react-router-dom"
import Search from '../../components/Search'
import { Item, List } from '../../components/Collapse'
import { motion, AnimatePresence } from "framer-motion"
import { useRef } from 'react'
import { useOnClickOutside } from 'use-hooks'

const Tab = () => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [selectedMenu, setSelectMenu] = useState(null)
    const parentMenu = menus?.find(menu => menu.id === selectedMenu)
    const handleClear = () => {
        setSelectMenu(null)
        setOpen(false)
    }
    useOnClickOutside(ref, handleClear)

    return (
        <div ref={ref} className={`${open && "bg-white text-black py-10"} py-5 duration-300 px-[30px] shadow`}>
            {
                !open ? (
                    <div className='flex justify-between items-center gap-5'>
                        <Link to="/" className='flex items-center gap-5'>
                            <img className="w-16" src={Logo} alt="logo" />
                            <h1 className='text-white max-w-sm'>Islom Karimov nomidagi Toshkent Davlat Texnika Universiteti</h1>
                        </Link>
                        <AlignRightOutlined onClick={() => setOpen(true)} className="text-xl" />
                    </div>
                ) : (
                    <div className='flex justify-between items-center gap-5'>
                        {
                            paths.map(item => (
                                <Link className='font-bold text-primary_green text-base' key={item.title} to={item.path}>
                                    {t(item.title)}
                                </Link>
                            ))
                        }
                        <CloseOutlined onClick={() => setOpen(false)} className="text-black text-xl" />
                    </div>
                )
            }

            <div className='relative overflow-hidden'>
                {
                    open && (
                        <AnimatePresence>
                            <motion.div
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className='text-black grid-cols-2 grid gap-5 mt-5'>
                                <div>
                                    <Search onClick={(e) => alert(e)} />
                                    <ul className='flex flex-col gap-2'>
                                        {
                                            menus.map(menu => (!!menu.children ? (
                                                <li key={menu.title} onClick={() => setSelectMenu(menu?.id)} className={`${parentMenu?.id === menu?.id && 'bg-primary_green rounded text-white'} py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center`}>
                                                    <span>{t(menu.title)}</span>
                                                    {
                                                        !!menu?.children && parentMenu?.id === menu?.id ? <CaretRightOutlined /> : <CaretDownOutlined />
                                                    }
                                                </li>
                                            ) : (
                                                <li key={menu.title} onClick={() => navigate(menu.path)} className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center'>
                                                    <span>{t(menu.title)}</span>
                                                </li>
                                            )))
                                        }
                                    </ul>
                                </div>
                                <div className='flex flex-col gap-2 relative z-20'>
                                    {
                                        parentMenu?.children?.map(menu => (!!menu.children ? (
                                            <List key={menu?.title}>
                                                <Item key={menu?.title} header={
                                                    <div className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center w-full'>
                                                        <span>{t(menu?.title)}</span>
                                                        <CaretDownOutlined />
                                                    </div>
                                                }>
                                                    <ul className='ml-5'>
                                                        {
                                                            menu?.children?.map(item => (!!item.children ? (
                                                                <List key={item?.title}>
                                                                    <Item key={item?.title} header={
                                                                        <div className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center w-full'>
                                                                            <span>{t(item?.title)}</span>
                                                                            <CaretDownOutlined />
                                                                        </div>
                                                                    }>
                                                                        <ul className='ml-5'>
                                                                            {
                                                                                item?.children?.map(item => (
                                                                                    <li key={item?.title} onClick={() => navigate(item?.path)} className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center'>
                                                                                        <span>{t(item?.title)}</span>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </Item>
                                                                </List>
                                                            ) : (
                                                                <li key={item?.title} onClick={() => navigate(item?.path)} className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center'>
                                                                    <span>{t(item?.title)}</span>
                                                                </li>
                                                            )))
                                                        }
                                                    </ul>
                                                </Item>
                                            </List>
                                        ) : (
                                            <li key={menu.title} onClick={() => navigate(menu.path)} className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center'>
                                                <span>{t(menu.title)}</span>
                                            </li>
                                        )))
                                    }
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )
                }
                <img src={LogoGreen} alt="logoGreen" width={200} className='absolute select-none right-10 top-20 opacity-20 z-10' />
            </div>
        </div>
    )
}

export default Tab