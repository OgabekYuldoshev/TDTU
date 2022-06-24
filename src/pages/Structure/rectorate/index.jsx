import React from 'react'
import HeaderImg from "../../../components/HeaderImg"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import PageHeader from "../../../components/PageHeader";

export default function Structure() {
    return (
        <div className=''>
            <HeaderImg text={"rectorate"}/>
            <PageHeader title='rectorate' paths={[
                {
                    title: 'rectorate',
                }
            ]} />
            <UsifulLinks/>
        </div>
    )
}