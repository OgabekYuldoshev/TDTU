import React from 'react'
import CollapseComponent from "react-collapsible"
import { AiOutlinePlus } from "react-icons/ai"

const Collapse = ({ title, children, onClick = () => null, collapse = true }) => {
    return collapse ? (
        <CollapseComponent transitionTime={200} trigger={(
            <div className='flex items-center justify-between w-full'>
                <span>
                    {title}
                </span>
                {children && <AiOutlinePlus />}
            </div>
        )} triggerClassName="flex justify-between w-full rounded bg-primary_lightgray py-2 px-4 text-base" triggerOpenedClassName="flex justify-between w-full rounded bg-primary_green text-white py-2 px-4 text-base" contentInnerClassName="ml-5 gap-2 flex flex-col mt-2">
            {children}
        </CollapseComponent>
    ) : (
        <div onClick={onClick} className='flex justify-between w-full rounded bg-primary_lightgray py-2 px-4 text-base'>
            <span>
                {title}
            </span>
        </div>
    )
}

export default Collapse