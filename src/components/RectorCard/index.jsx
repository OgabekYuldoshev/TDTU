import React from 'react'
import Logo from "../../assets/png/logo.png"
import LogoGreen from "../../assets/png/logoGreen.png"

const RectorCard = ({ active = false }) => {
    return (
        <div className='my-12'>
            <div className={`${active && "bg-primary_green"} group hover:bg-primary_green bg-white p-5 rounded-xl shadow-lg relative duration-300`}>
                <div className={`${active && "border-white"} group-hover:border-white border border-primary_green rounded-xl md:p-10 p-5 grid md:grid-cols-4 items-center justify-between duration-300`}>
                    <div className='md:flex hidden col-span-1 relative items-center justify-center'>
                        <div className='md:w-[300px] w-[200px] md:h-[350px] h-[250px] absolute p-5 rounded-xl' style={{ background: "url(https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className='border h-full rounded-xl' />
                        </div>
                    </div>
                    <div className={`${active && "text-white"} md:col-span-3 sm:col-span-2 col-span-1 md:pl-[100px] flex flex-col items-between group-hover:text-white duration-300`}>
                        <div className='font-medium md:text-lg text-base cursor-pointer'>Turabjanov Sadriddin Maxamatdinovich</div>
                        <div className='flex items-center gap-1  md:text-lg text-base'>
                            <span className='font-medium'>Lavozimi:</span>
                            <span>Rektor</span>
                        </div>
                        <div className='flex items-center gap-1  md:text-lg text-base'>
                            <span className='font-medium'>Ilmiy darajasi:</span>
                            <span>Texnika fanlari doktori, Professor</span>
                        </div>
                        <div className='flex items-center gap-1  md:text-lg text-base'>
                            <span className='font-medium'>Qabul vaqti:</span>
                            <span>8.00 dan 18.00 gacha</span>
                        </div>
                        <div className='flex items-center gap-1  md:text-lg text-base'>
                            <span className='font-medium'>Telefon:</span>
                            <span>+998 71 246 - 46 - 00</span>
                        </div>
                        <div className='flex items-center gap-1  md:text-lg text-base'>
                            <span className='font-medium'>E-mail:</span>
                            <span>rektor@tdtu.uz</span>
                        </div>
                    </div>
                    <div className='col-span-1 md:flex hidden justify-end absolute right-20'>
                        {
                            active ? <img src={Logo} className="w-40 block " alt="logo" srcset="" /> : (
                                <>
                                    <img src={LogoGreen} className="group-hover:hidden block w-40" alt="logo" srcset="" />
                                    <img src={Logo} className="w-40 group-hover:block hidden" alt="logo" srcset="" />
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RectorCard