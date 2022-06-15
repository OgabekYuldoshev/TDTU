import React from 'react'
import Logo from "../../assets/png/logoGreen.png"
import { IoMdClose } from "react-icons/io"
import { BsSearch } from "react-icons/bs"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai"

const MobileMenu = ({ links, menus }) => {
    const { t } = useTranslation()

    return (
        <div className='fixed bg-white h-screen w-full z-50 px-[15px]'>
            <div>
                <div className={` py-[20px] flex justify-between items-center`}>
                    <div className='flex gap-5 items-center cursor-pointer md:max-w-md max-w-sm'>
                        <img src={Logo} alt="logo" className='w-10' />
                        <h1 className='md:text-xl text-primary_green sm:text-lg text-sm font-bold text-white'>
                            {t('university_name')}
                        </h1>
                    </div>
                    <div className='cursor-pointer'>
                        <IoMdClose fontSize={26} className="text-primary_green" />
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
                        menus?.map(menu => (
                            <div key={menu} className="flex justify-between w-full rounded bg-primary_lightgray py-2 px-4 text-base">
                                <span>{menu.name}</span>
                                {!!menu.children && <AiOutlinePlus />}
                            </div>
                        ))
                    }
                </div>
                <img src={Logo} alt="logo" className='w-1/2 opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40' />
            </div>

        </div>
    )
}

export default MobileMenu