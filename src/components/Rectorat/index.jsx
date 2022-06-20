import React, {useState} from "react"
import "./scss/main.scss"
import imgUser from "../../assets/png/rectorat/img.png"
import logo from "../../assets/png/logo.png"
import logo1 from "../../assets/png/logoGreen.png"

export default function Rectorate() {

    const [onMouse, setOnMouse] = useState(false)

    return (
        <div id={'rectorate'}>
            <div className="info" onMouseOver={() => setOnMouse(true)}
                 onMouseOut={() => setOnMouse(false)}>
                <div className="info__img">
                    <div className="info__img__left">
                        <img className="info__img__left__img" src={imgUser} alt="user"/>
                        <div className="info__img__left__imgWrapper"/>
                        <div className="info__img__left__data">
                                    <span
                                        className="info__img__left__data__title">Turabjanov Sadriddin Maxamatdinovich</span>{" "}
                            <br/>
                            <span className="info__img__left__data__title">
                      Lavozimi:
                    </span>
                            <span className="info__img__left__data__text">
                                        mnvdbsfkjbvksjdbv
                    </span>
                            {"  "}
                            <br/>
                            <span className="info__img__left__data__title">
                      Ilmit Darajasi :
                    </span>
                            {"  "}
                            <span className="info__img__left__data__text">
                      "shkdbfkuasdblasc
                    </span>
                            {"  "}
                            <br/>
                            <span className="info__img__left__data__title">
                      Qabul vaqti :
                    </span>
                            {"  "}
                            <span className="info__img__left__data__text">
                      "kjblskjdnk.sdc
                    </span>
                            {"  "}
                            <br/>
                            <span className="info__img__left__data__title">
                      Telefon :
                    </span>
                            {"  "}
                            <span className="info__img__left__data__text">
                      skhdblcskjcn
                    </span>{" "}
                            <br/>
                            <span className="info__img__left__data__title">
                      E mail :
                    </span>
                            {"  "}
                            <span className="info__img__left__data__text">
                      kjshbldkjd
                    </span>{" "}
                            <br/>
                        </div>
                    </div>
                    <img style={{height: "11.5vw"}} src={onMouse ? logo : logo1} alt="logo"/>
                </div>
            </div>
        </div>
    )
}