import { IoMdGlasses } from "react-icons/io"
import { AiOutlineFontSize } from "react-icons/ai"
import { Dropdown } from 'antd'
import React, { useEffect, useState } from 'react'
import { storage } from "../../servises"

const Tools = () => {
    const [mode, setMode] = useState(false)
    const [zoom, setZoom] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body')
        body.classList = `${storage.local.get('grayscale') && 'grayscale'} ${storage.local.get('zoom') && 'zoom'}`
    }, [mode, zoom])

    const handleZoom = (val) => {
        if (val === true) {
            setZoom(true)
            storage.local.set('zoom', true)
        } else {
            setZoom(false)
            storage.local.remove('zoom')
        }
    }

    const handleGray = (val) => {
        if (val === true) {
            setMode(true)
            storage.local.set('grayscale', true)
        } else {
            setMode(false)
            storage.local.remove('grayscale')
        }
    }

    const menu = (
        <div className='bg-primary_lightgray bg-opacity-90 rounded grid grid-cols-2 gap-2 p-1'>
            <button className={`${!storage.local.get('grayscale') ? "bg-primary_green_darken text-white" : "hover:bg-primary_green hover:text-white bg-white"} col-span-2  px-4 py-2 rounded  duration-300`} onClick={() => handleGray(false)}>Oddiy versiya</button>
            <button className={`${storage.local.get('grayscale') ? "bg-primary_green_darken text-white" : "hover:bg-primary_green hover:text-white bg-white"} col-span-2 px-4 py-2 rounded  duration-300`} onClick={() => handleGray(true)}>Qora oq versiya</button>
            <button onClick={() => handleZoom(true)} className={`${storage.local.get('zoom') ? "bg-primary_green_darken text-white" : "hover:bg-primary_green hover:text-white bg-white"}  px-4 py-2 rounded  duration-300 flex gap-2`}>
                <AiOutlineFontSize fontSize={24} />
                <span>+</span>
            </button>
            <button onClick={() => handleZoom(false)} className={`${!storage.local.get('zoom') ? "bg-primary_green_darken text-white" : "hover:bg-primary_green hover:text-white bg-white"}  px-4 py-2 rounded  duration-300 flex gap-2`}>
                <AiOutlineFontSize fontSize={24} />
                <span>-</span>
            </button>
        </div>
    )

    return (
        <Dropdown overlay={menu} placement="bottom" trigger={['click']}>
            <IoMdGlasses fontSize={24} />
        </Dropdown>
    )
}

export default Tools