import React from "react"
import "./scss/main.scss"
import img from "./img.png"

export default function Staff() {
    return (
        <div id={"staff"} className={"staff"}>
            <div className="staff__item">
                <img className="staff__item__img" src={img} alt="staff"/>
                <div className="staff__item__info">
                    <span className="staff__item__info__head">Dusmatov Ravshan Komiljonovich</span> <br/>
                    <span className="staff__item__info__head">Lavozim: </span>{" "}
                    <span className="staff__item__info__text">Dekan o’rinbosari</span>
                    <br/>
                    <span className="staff__item__info__head">Telefon: </span>{" "}
                    <span className="staff__item__info__text">+998 71 246-03-04</span>
                    <br/>
                    <span className="staff__item__info__head">e-mail: </span>
                    <span className="staff__item__info__text">iis_ravshan@mail.ru</span>
                    <br/>
                </div>
            </div>
        </div>
    )
}