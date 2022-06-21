import React from "react"
import "./scss/main.scss"
import data from "./utils/data"

export default function Service() {
    return (
        <div className="service flex flex-col items-center justify-center">
            {
                data.map(items =>
                    <div key={items.id}
                         className='card cursor-pointer w-4/5 flex items-center p-8 bg-white rounded-xl'>
                        <img className='card__img' src={items.icon} alt=""/>
                        <div className='card__text'>
                            <h5>{items.name}</h5>
                            <p>{items.title}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}