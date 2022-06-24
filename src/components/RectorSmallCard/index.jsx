import React from 'react'

const RectorSmallCard = () => {
    return (
        <div className='my-10'>
            <div className={` bg-white p-5 rounded-xl shadow-lg relative duration-300`}>
                <div className={`rounded-xl items-center justify-between duration-300`}>
                    <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' className='w-[200px] h-[250px] left-0 top-1/2 transform -translate-y-1/2 absolute rounded-xl object-cover object-center lg:block hidden' />
                    <div className={`lg:pl-[200px] flex flex-col items-between duration-300`}>
                        <div className='font-medium text-base cursor-pointer'>Turabjanov Sadriddin Maxamatdinovich</div>
                        <div className='flex items-center gap-1 text-base'>
                            <span className='font-medium'>Lavozimi:</span>
                            <span>Rektor</span>
                        </div>
                        <div className='flex items-center gap-1 text-base'>
                            <span className='font-medium'>Ilmiy darajasi:</span>
                            <span>Texnika fanlari doktori, Professor</span>
                        </div>
                        <div className='flex items-center gap-1 text-base'>
                            <span className='font-medium'>Qabul vaqti:</span>
                            <span>8.00 dan 18.00 gacha</span>
                        </div>
                        <div className='flex items-center gap-1 text-base'>
                            <span className='font-medium'>Telefon:</span>
                            <span>+998 71 246 - 46 - 00</span>
                        </div>
                        <div className='flex items-center gap-1 text-base'>
                            <span className='font-medium'>E-mail:</span>
                            <span>rektor@tdtu.uz</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RectorSmallCard