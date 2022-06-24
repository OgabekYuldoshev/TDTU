import React from 'react'
import HeaderImg from "../../../components/HeaderImg"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import PageHeader from "../../../components/PageHeader";
import RectorCard from '../../../components/RectorCard';

export default function Structure() {
    return (
        <>
            <HeaderImg text={"rectorate"} />
            <PageHeader title='rectorate' paths={[
                {
                    title: 'rectorate',
                }
            ]} />
            <div className='responsive'>
                <RectorCard />
            </div>
            <UsifulLinks />
        </>
    )
}