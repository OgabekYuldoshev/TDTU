import React from "react"
import ButtonCom from "../../components/ButtonCom";
import ComponentCard from "../../components/newspaper_card";

export default function News() {
    return (
        <div className={"news_letter"}>
            {/*<div className="title-page flex justify-between w-full border  border-b-zinc-900 border-t-zinc-50">*/}
            {/*    <h5 className={"font-extrabold text-5xl text-black"}>Yangiliklar va e’lonlar</h5>*/}
            {/*    <ButtonCom text={"Barchasini ko`rish"} textColor={"text-black"}/>*/}
            {/*</div>*/}
            <ComponentCard/>
        </div>
    )

}