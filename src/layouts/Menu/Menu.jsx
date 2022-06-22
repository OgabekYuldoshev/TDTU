import React from 'react'
import { AlignRightOutlined, CaretDownOutlined, SearchOutlined, CaretRightOutlined, CloseCircleOutlined, CloseOutlined } from "@ant-design/icons"
import LogoGreen from "../../assets/png/logoGreen.png"
import { useState } from 'react'
import { useOnClickOutside } from "use-hooks"
import { useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { menus } from "../menu"
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { Item, List } from '../../components/Collapse'


const Menu = ({ onOpen = () => null }) => {
    const ref = useRef(null)
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [selectedMenu, setSelectMenu] = useState()
    const [search, setSearch] = useState(false)

    const [selectedChildMenu, setSelectMenuChild] = useState()

    const handleClear = () => {
        setSelectMenu(null)
        setSelectMenuChild(null)
    };
    useOnClickOutside(ref, handleClear);
    const parentMenu = menus?.find(menu => menu.id === selectedMenu)
    const childMenu = parentMenu?.children?.find(menu => menu.id === selectedChildMenu)

    return (
        <div className='relative z-50'>
            <div className='bg-white absolute -bottom-8 w-full text-black py-4 shadow px-4 rounded'>
                <div className='flex items-center justify-between gap-5 divide-x'>
                    <SearchOutlined className='text-lg cursor-pointer' onClick={() => setSearch(current => !current)} />
                    {
                        search ? (
                            <form onSubmit={() => alert('searching...')} className='w-full px-4'>
                                <input name='search' type="text" placeholder={t('search')} className="w-full px-4 font-medium border-b focus:outline-none" />
                            </form>
                        ) : (
                            <ul className='flex justify-between items-center w-full mb-0 pl-4 font-medium '>
                                {
                                    menus?.map(menu => !!menu.children ? (
                                        <li key={menu?.title} onClick={() => setSelectMenu(menu.id)} className='cursor-pointer hover:text-primary_green'>
                                            {t(menu?.title)}
                                        </li>
                                    ) : (
                                        <li key={menu?.title} onClick={() => navigate(menu?.path)} className='cursor-pointer hover:text-primary_green'>
                                            {t(menu?.title)}
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                    {
                        search ?
                            <CloseOutlined onClick={() => setSearch(false)} className='text-lg pl-4 cursor pointer hover:text-primary_green' />
                            : <AlignRightOutlined onClick={onOpen} className='text-lg pl-4 cursor pointer hover:text-primary_green' />
                    }
                </div>
            </div>
            {
                selectedMenu && (
                    <AnimatePresence>
                        <motion.div
                            transition={{ duration: 0.1 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            ref={ref}
                            onMouseLeave={handleClear}
                            className={`duration-300 overflow-hidden bg-white absolute top-10 w-full  shadow`}>
                            <div className='px-4 block relative rounded grid grid-cols-3 gap-10 text-black py-8 px-14'>
                                <div className='z-20'>
                                    <h1 className='text-xl font-bold'>{t(parentMenu.title)}</h1>
                                    <p className='mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore deserunt nostrum accusamus aliquam error veritatis ab pariatur aliquid optio blanditiis?</p>
                                </div>
                                <ul className='flex flex-col gap-2 '>
                                    {
                                        parentMenu.children.map(children => !!children.children ? (
                                            <li key={children.title} onClick={() => setSelectMenuChild(children?.id)} className={`${childMenu?.id === children?.id && 'bg-primary_green rounded text-white'} py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center`}>
                                                <span>{t(children.title)}</span>
                                                {
                                                    !!children?.children && childMenu?.id === children?.id ? <CaretRightOutlined /> : <CaretDownOutlined />
                                                }
                                            </li>
                                        ) : (
                                            <li key={children.title} onClick={() => navigate(children.path)} className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center'>
                                                <span>{t(children.title)}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <ul className='flex flex-col gap-2 relative z-20'>
                                    {
                                        childMenu?.children?.map(children => !!children?.children ? (
                                            <List key={children?.title}>
                                                <Item key={children?.title} header={
                                                    <div className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center w-full'>
                                                        <span>{t(children?.title)}</span>
                                                        {
                                                            <CaretDownOutlined />
                                                        }
                                                    </div>
                                                }>
                                                    <ul className='ml-5'>
                                                        {
                                                            children?.children?.map(item => (
                                                                <li key={item?.title} onClick={() => navigate(item?.path)} className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center'>
                                                                    <span>{t(item?.title)}</span>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </Item>

                                            </List>
                                        ) : (
                                            <li key={children?.title} onClick={() => navigate(children?.path)} className='py-2 px-4 border-b border-primary_green hover:bg-primary_green hover:rounded hover:text-white font-me duration-300 cursor-pointer flex justify-between items-center'>
                                                <span>{t(children?.title)}</span>
                                            </li>
                                        ))
                                    }
                                </ul>

                                {/* logo Absolute */}
                                <img src={LogoGreen} alt="logoGreen" width={200} className='absolute select-none right-10 top-10 opacity-20 z-10' />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )
            }

        </div >
    )
}

export default Menu