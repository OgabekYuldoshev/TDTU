import React from 'react'
import HeaderImg from "../../../components/HeaderImg"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import PageHeader from "../../../components/PageHeader";
import RectorCard from '../../../components/RectorCard';
import RectorSmallCard from '../../../components/RectorSmallCard';
import AbiturentCard from '../../../components/AbiturentCard';


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
                <div className='grid grid-cols-2 gap-5'>
                    <RectorSmallCard />
                </div>
                <div className='grid grid-cols-2 gap-5 mt-10'>
                    <AbiturentCard />
                </div>
            </div>
            <UsifulLinks />
        </>
    )
}