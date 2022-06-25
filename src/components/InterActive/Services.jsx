import React from "react"
import "./main.scss"
import InterRot from "../../assets/svg/rot.svg"
import { SettingFilled } from "@ant-design/icons"

export default function Services() {
    return (
        <div className="flex items-center gap-5 w-full bg-white rounded-lg px-5 py-2 shadow-lg">
            <SettingFilled className="text-3xl" />
            <div>
                <h2 className="pb-0 mb-0">Korporativ Elektron Pochta</h2>
                <p className="pb-0 mb-0">TDTU Korporativ elektron pochtasi</p>
            </div>
        </div>
    )
}