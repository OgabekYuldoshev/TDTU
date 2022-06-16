import React, { useState } from 'react'
import TopHead from '../../components/TopHead'
import Logo from "../../assets/png/logo.png"
import { Link, useNavigate } from "react-router-dom"
import Languages from '../../components/Language'
import { BiMenuAltRight } from "react-icons/bi"
import { useTranslation } from 'react-i18next'
import { links, menus } from "../menu"
import LogoGreen from "../../assets/png/logoGreen.png"
import { IoMdClose } from "react-icons/io"
import { BsSearch } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri"
import Collapse from '../../components/Collapse'

const Header = () => {
    const { t } = useTranslation()
    const [menu, setMenu] = useState(false)
    const handleShowMenu = () => setMenu(true)
    const handleHideMenu = () => setMenu(false)
    const [selected, setSelect] = useState(null)
    const [selected2, setSelect2] = useState(null)
    const navigate = useNavigate()

    return (
        <header>

            <TopHead />
            <div className={`${menu ? "bg-white w-full h-full" : "h-fit bg-primary_green relative"} xl:px-[140px] md:px-[60px] sm:px-[30px] px-[15px] py-[20px] md:pb-[40px] duration-300`}>

                {
                    menu ? (
                        <div className={`${menu ? 'h-auto' : 'h-0'}`}>
                            <div className='sm:hidden block'>
                                <div className={` pb-[20px] flex justify-between items-center`}>
                                    <div className='flex gap-5 items-center cursor-pointer md:max-w-md max-w-sm'>
                                        <img src={LogoGreen} alt="logo" className='w-10' />
                                        <h1 className='md:text-xl text-primary_green sm:text-lg text-sm font-bold'>
                                            {t('university_name')}
                                        </h1>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <IoMdClose onClick={handleHideMenu} fontSize={26} className="text-primary_green" />
                                    </div>
                                </div>
                                <div className='border-b py-2 flex items-center gap-2'>
                                    <input type="text" placeholder={t('search')} className="w-full focus:outline-none text-base" />
                                    <button>
                                        <BsSearch fontSize={20} />
                                    </button>
                                </div>
                                <div className='grid grid-cols-2 gap-3 mt-5'>

                                    {
                                        links?.map(item => (
                                            <Link key={item} to={item?.link} className='text-center rounded hover:bg-primary_green_darken bg-primary_green py-1 text-white duration-300'>
                                                {item.name}
                                            </Link>
                                        ))
                                    }
                                </div>
                                <div className='mt-5 overflow-y-auto flex flex-col z-50 gap-2'>

                                    {
                                        menus?.map(menu =>
                                            <Collapse collapse={!!menu.children} onClick={() => navigate(menu?.link)} key={menu.name} title={menu?.name}>
                                                {
                                                    menu?.children?.map(item => (
                                                        <Collapse collapse={!!item.children} onClick={() => navigate(item?.link)} key={item.name} title={item?.name}>
                                                            {
                                                                !!item.children && item?.children?.map(obj => (
                                                                    <Collapse collapse={!!obj.children} onClick={() => navigate(obj?.link)} key={obj.name} title={obj?.name}>
                                                                        {
                                                                            obj?.children?.map(objItem => <Collapse collapse={!!objItem.children} onClick={() => navigate(objItem?.link)} key={objItem.name} title={objItem?.name} />)
                                                                        }
                                                                    </Collapse>
                                                                ))
                                                            }
                                                        </Collapse>
                                                    ))
                                                }
                                            </Collapse>

                                        )
                                    }
                                </div>
                                <img src={LogoGreen} alt="logo" className='w-1/2 opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40' />
                            </div>

                            <div className='sm:block hidden'>
                                <div className={`pb-[20px] pt-[10px] flex justify-between items-center`}>
                                    {
                                        links?.map(item => (
                                            <Link key={item} to={item?.link} className='text-center
                                                font-bold text-primary_green text-base duration-300'>
                                                {item.name}
                                            </Link>
                                        ))
                                    }
                                    <div className='cursor-pointer'>
                                        <IoMdClose onClick={handleHideMenu} fontSize={26} className="text-primary_green" />
                                    </div>
                                </div>
                                <img src={LogoGreen} alt="logo" className='w-1/3 opacity-10 absolute top-1/2 right-24 transform  -translate-y-1/2 z-40' />
                                <div className='grid grid-cols-2 gap-5'>
                                    <ul className='flex flex-col gap-2'>
                                        <div className='border-b py-2 flex items-center gap-2'>
                                            <input type="text" placeholder={t('search')} className="w-full focus:outline-none text-base" />
                                            <button>
                                                <BsSearch fontSize={20} />
                                            </button>
                                        </div>
                                        {
                                            menus?.map(item => (
                                                <li key={item} onClick={() => setSelect(item)} className={`${selected?.name === item.name && "bg-primary_green rounded text-white"} border-b hover:bg-primary_green hover:rounded border-primary_green px-4 py-2 duration-300 hover:text-white flex justify-between items-center`}>
                                                    <span>{item?.name}</span>
                                                    {!!item.children && (selected?.name === item.name ? <RiArrowLeftSFill /> : <RiArrowRightSFill />)}
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    <ul className='flex flex-col gap-2'>
                                        {
                                            selected?.children?.map(item => (
                                                <li key={item} onClick={() => setSelect2(item)} className='border-b hover:bg-primary_green hover:rounded border-primary_green px-4 py-2 duration-300 hover:text-white flex justify-between items-center'>
                                                    <span>{item?.name}</span>
                                                    {!!item.children && <RiArrowLeftSFill />}
                                                </li>
                                            ))
                                        }
                                        {
                                            selected2?.children?.map(item => (
                                                <li key={item} className='border-b hover:bg-primary_green hover:rounded border-primary_green px-4 py-2 duration-300 hover:text-white flex justify-between items-center'>
                                                    <span>{item?.name}</span>
                                                    {!!item.children && <RiArrowLeftSFill />}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex justify-between items-center'>
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
                                <BiMenuAltRight onClick={handleShowMenu} fontSize={26} className="text-white" />
                            </div>
                        </div>
                    )
                }

            </div>
        </header>
    )
}

export default Header