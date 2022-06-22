import React from "react"
import "./main.scss"
import InterRot from "../../assets/svg/rot.svg"

export default function Services() {
    return (
        <div className="service flex flex-col items-center justify-center">
            <div className='card cursor-pointer flex items-center p-8 bg-white rounded-xl'>
                <img className='card__img' src={InterRot} alt=""/>
                <div className='card__text'>
                    <h5>Korporativ Elektron Pochta</h5>
                    <p>TDTU Korporativ elektron pochtasi</p>
                </div>
            </div>
        </div>
    )
}