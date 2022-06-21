import React from 'react'
import Button from '../Button'
import Logo from "../../assets/png/logo.png"

const NewsCard = ({ img, title, text, date, link }) => {
    return (
        <div className='group relative rounded-lg bg-white shadow overflow-hidden'>
            <img className='group-hover:h-full h-[200px] w-full object-cover object-center duration-300 z-5 absolute top-0 left-0' src='https://images.unsplash.com/photo-1655798393594-2ffdb1adc64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt="newsImage" />
            <div className='group-hover:h-full group-hover:bg-black h-[200px] absolute top-0 left-0 w-full duration-300 z-10 group-hover:bg-opacity-50'>
                <div className='relative w-full h-full'>
                    <div className='m-5 flex items-center gap-3 duration-300 absolute top-24 left-0 group-hover:top-0 h-fit'>
                        <img src={Logo} className="w-16" alt="logo" />
                        <p className='text-white text-base font-semibold w-1/2 mb-0'>Toshkent Davlat Texnika Universiteti</p>
                    </div>
                </div>
            </div>
            <div className='relative z-20 mt-[200px] p-[30px]'>
                <h2 className='text-base group-hover:text-white duration-300'>Rektor va yosh talabalar uchrashuvi</h2>
                <p className='group-hover:text-white duration-300'>11-mart kuni soat 14:00 da Toshkent davlat texnika universiteti rektori Turabdjanov Sadritdin Maxamaddinovich boshchiligida universitet 1-kurs guruh sardorlari bilan uchrashuv bo‘lib o‘tdi.
                </p>
                <div className='flex justify-between'>
                    <span className='group-hover:text-white duration-300'>14:35  12.03.2022</span>
                    <span className='group-hover:block hidden'>
                        <Button className="px-2 group-hover:text-white" title="Batafsil" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard