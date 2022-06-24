import React from 'react'

const Input = ({ invalid = false, label, ...props }) => {
    return (
        <div className='w-full block'>
            {!!label && <label className='font-medium'>{label}</label>}
            <input {...props} className={`${invalid ? "border-red-500" : "border-primary_green"} bg-transparent border rounded px-2 py-1 duration-300 focus:outline-none block w-full`} />
        </div>

    )
}

export default Input