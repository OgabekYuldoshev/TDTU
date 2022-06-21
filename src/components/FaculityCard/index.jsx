import { BarChartOutlined } from '@ant-design/icons'
import React from 'react'

const FaculityCard = ({img, icon, title}) => {
    return (
        <div className='group relative rounded-lg shadow-lg overflow-hidden'>
            <img src="https://images.unsplash.com/photo-1655747341547-92f2a5943157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" alt="faculity" className='absolute w-full h-full object-cover object-center z-5 group-hover:scale-105 transform duration-300' />
            <div className='relative z-10 bg-black bg-opacity-50 text-white p-8'>
                <div className='flex items-center justify-center'>
                    <BarChartOutlined className='text-4xl m-auto' />
                </div>
                <h2 className='text-white text-base text-center mt-2'>Issiqlik Energetikasi Fakulteti</h2>
            </div>
        </div>
    )
}

export default FaculityCard