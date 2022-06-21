import React from 'react'
import './button.css'

const Button = ({ title, ...props }) => {
    return (
        <button {...props} id='button'>
            <span {...props}>{title}</span>
        </button>
    )
}

export default Button