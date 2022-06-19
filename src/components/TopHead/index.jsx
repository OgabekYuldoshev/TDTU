import React from 'react'
import { FaPhone } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { BsMusicNoteBeamed } from "react-icons/bs"
import Gerb from "../../assets/png/gerb.png"
import Flag from "../../assets/png/uz.png"
import Languages from '../../components/Language'
import Tools from '../../components/Tools'

const TopHead = () => {
    return (
        <div className='bg-primary_green_darken xl:px-[140px] md:px-[60px] sm:px-[30px] px-[15px] text-white py-[12px] flex md:justify-end justify-between items-center md:gap-8 gap-4'>
            <div className='flex md:hidden items-center md:gap-8 gap-4'>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <img src={Gerb} alt="gerb" width="20px" />
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <img src={Flag} alt="fleg" width="20px" />
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <BsMusicNoteBeamed fontSize={24} />
                </div>
            </div>

            <div className='flex items-center md:gap-8 gap-4'>
                <div className='flex gap-2 items-center'>
                    <FaPhone fontSize={20} />
                    <span className='sm:block hidden'>+998 71 246-46-00</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineMail fontSize={20} />
                    <span className='sm:block hidden'>tstu_info@tdtu.u</span>
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <Tools />
                </div>
                <div className='hidden md:flex items-center gap-8'>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <img src={Gerb} alt="gerb" width="20px" />
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <img src={Flag} alt="fleg" width="20px" />
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <BsMusicNoteBeamed fontSize={24} />
                    </div>
                </div>
                <div className='md:hidden block'>
                    <Languages />
                </div>
            </div>
        </div>
    )
}

export default TopHead