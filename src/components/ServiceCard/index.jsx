import React from 'react'
import DTM from "../../assets/png/dtm.png"
const ServeiceCard = () => {
    return (
        <div className='w-full cursor-pointer bg-white py-5 h-fit shadow rounded-lg hover:shadow-lg duration-300 gap-4 grid grid-cols-1 px-7'>
            <div className='flex justify-center'>
                <img src={DTM} alt="student" />
            </div>
            <h2 className='text-center text-lg font-bold mb-0'>Davtlat test markazi</h2>
        </div>
    )
}

export default ServeiceCard