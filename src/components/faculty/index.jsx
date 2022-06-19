import React from "react"
import "./scss/faculty.scss"
import {data} from "./utils/data"

export default function Faculty() {
    return (
        <ul className="faculty_list w-full mb-10 m-0 p-0 list-none flex flex-wrap justify-between items-center cursor-pointer">
            {
                data.map(items=>
                    <li key={items.id} className="faculty_item w-[23.2%] mb-9 overflow-hidden relative rounded-xl">
                        <a className="faculty_link rounded-xl overflow-hidden block" href="#">
                            <img
                                className="faculty_img w-full block relative opacity-70 object-cover rounded-xl"
                                src={items.img}
                                alt=" img"
                            />
                        </a>
                        <div className="faculty_content w-full h-full absolute flex flex-col justify-center items-center pt-36 bottom-0 left-0 right-0">
                            <img
                                className="faculty_img_logo w-24"
                                src={items.logo}
                                alt="faculty_logo"
                            />
                            <div className="faculty_title m-0 py-0 px-8 font-normal text-2xl text-center uppercase text-white m-2.5">
                                {items.name}
                            </div>
                        </div>
                    </li>
                )
            }
        </ul>
    )
}