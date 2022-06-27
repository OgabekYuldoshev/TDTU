import { AlignRightOutlined, CaretDownOutlined, CloseOutlined } from '@ant-design/icons'
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
import { useOnClickOutside } from 'use-hooks'
import { useRef } from 'react'

const Tab = () => {
    const [open, setOpen] = useState(false)
    const { t } = useTranslation()
    const navigate = useNavigate()
    const ref = useRef()
    const handleClear = () => setOpen(false)
    useOnClickOutside(ref, handleClear);

    return (
        <div ref={ref} className={`${open && "bg-white text-black"} py-5 duration-300 px-[15px] shadow`}>
            <div className='flex justify-between items-center gap-5'>
                <Link to="/" className='flex items-center gap-5'>
                    <img className={`${open ? 'hidden' : 'block'} w-16`} src={Logo} alt="logo" />
                    <img className={`${open ? 'block' : 'hidden'} w-16`} src={LogoGreen} alt="logoGreen" />
                    <h1 className={`${open ? 'text-primary_green' : 'text-white'} max-w-sm`}>{t('university_name')}</h1>
                </Link>
                {open ? <CloseOutlined onClick={() => setOpen(false)} className="text-black text-xl" /> :
                    <AlignRightOutlined onClick={() => setOpen(true)} className="text-xl" />}
            </div>
            <div className='relative overflow-hidden'>
                {
                    open && (
                        <AnimatePresence>
                            <motion.div
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className='text-black grid-cols-1 grid gap-5 mt-5 relative z-20'>
                                <div className='flex flex-col gap-2'>
                                    <Search onClick={(e) => alert(e)} />
                                    <div className='grid grid-cols-2 gap-3 my-5'>
                                        {
                                            paths.map(item => <Link key={item.title} className='py-2 px-4 text-white font-semibold bg-primary_green text-center rounded' to={item.path}>{t(item.title)}</Link>)
                                        }
                                    </div>
                                    {
                                        menus.map(menu => !!menu.children ? (
                                            <List key={menu?.title}>
                                                <Item key={menu?.title} header={
                                                    <div className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center w-full'>
                                                        <span>{t(menu?.title)}</span>
                                                        <CaretDownOutlined />
                                                    </div>
                                                }>
                                                    <ul className='ml-5'>
                                                        {
                                                            menu?.children?.map(item => !!item.children ? (
                                                                <List key={item?.title}>
                                                                    <Item key={item?.title} header={
                                                                        <div className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center w-full'>
                                                                            <span>{t(item?.title)}</span>
                                                                            <CaretDownOutlined />
                                                                        </div>
                                                                    }>
                                                                        <ul className='ml-5'>
                                                                            {
                                                                                item?.children?.map(item => !!item?.children ? (
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
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </Item>
                                                                </List>
                                                            ) : (
                                                                <li key={item?.title} onClick={() => navigate(item?.path)} className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center'>
                                                                    <span>{t(item?.title)}</span>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </Item>
                                            </List>
                                        ) : (
                                            <li key={menu.title} onClick={() => navigate(menu.path)} className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center'>
                                                <span>{t(menu.title)}</span>
                                            </li>
                                        ))
                                    }
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )
                }
                <img src={LogoGreen} alt="logoGreen" width={200} className='absolute select-none left-1/2 top-40 transform -translate-y-1/2 -translate-x-1/2 opacity-20 z-10' />
            </div>
        </div>
    )
}

export default Tab