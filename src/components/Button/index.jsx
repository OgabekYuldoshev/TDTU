import React from 'react'
import './button.css'

const Button = ({ title, ...props }) => {
    return (
        <button {...props} id='button'>
            <span>{title}</span>
        </button>
    )
}

export default Button