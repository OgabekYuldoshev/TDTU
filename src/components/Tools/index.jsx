import { IoMdGlasses } from "react-icons/io"
import { AiOutlineFontSize } from "react-icons/ai"
import { Dropdown } from 'antd';
import React, { useState } from 'react';

const Tools = () => {
    const [mode, setMode] = useState(1)
    const menu = (
        <div className='bg-primary_lightgray bg-opacity-90 rounded grid grid-cols-2 gap-2 p-1'>
            <button className={`${mode === 1 ? "bg-primary_green_darken text-white" : "hover:bg-primary_green hover:text-white bg-white"} col-span-2  px-4 py-2 rounded  duration-300`} onClick={() => setMode(1)}>Oddiy versiya</button>
            <button className={`${mode === 2 ? "bg-primary_green_darken text-white" : "hover:bg-primary_green hover:text-white bg-white"} col-span-2 px-4 py-2 rounded  duration-300`} onClick={() => setMode(2)}>Qora oq versiya</button>
            <button className=" px-4 py-2 rounded bg-white hover:bg-primary_green hover:text-white duration-300 flex gap-2 items-center">
                <AiOutlineFontSize fontSize={24} />
                <span>+</span>
            </button>
            <button className="flex gap-2 items-center px-4 py-2 rounded bg-white hover:bg-primary_green hover:text-white duration-300">
                <AiOutlineFontSize fontSize={24} />
                <span>-</span>
            </button>
        </div>
    )

    return (
        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
            <IoMdGlasses fontSize={24} />
        </Dropdown>
    )
}

export default Tools