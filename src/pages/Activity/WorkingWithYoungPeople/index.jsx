import React from 'react'
// import {useTranslation} from "react-i18next"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import PageHeader from "../../../components/PageHeader"

export default function WorkingWithYoungPeople() {

    // const {t} = useTranslation()

    return (
        <div className='md:pt-14 pb-5'>
            <PageHeader title='working_with_young_people' paths={[
                {
                    title: 'working_with_young_people'
                }
            ]}/>
            <div className='responsive flex flex-col gap-5'>
                <div className="">
                    <iframe className={"float-right md:w-1/2 w-full rounded-xl"} height="315"
                            src="https://www.youtube.com/embed/nOQyWbPO2Ds"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <p className='lg:text-xl md:text-base lg:leading-9 leading-6'>Maybe we can live without libraries,
                        people like you and me. Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit. Doloribus id ipsum minima rem repudiandae. Accusantium beatae culpa, deleniti,
                        dolorem, dolores earum enim esse magni modi quaerat similique unde voluptatem! Debitis.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem debitis, deleniti dicta ea
                        eius eos error laboriosam laudantium maxime modi nam odio omnis pariatur possimus provident
                        quaerat quam quo repellat repudiandae rerum vel vero. Asperiores aspernatur assumenda atque
                        autem distinctio doloribus eaque eos esse eveniet facere hic impedit iure, libero minus mollitia
                        odit voluptates! Aliquid cum esse inventore, obcaecati pariatur perferendis quia. Consequuntur
                        deserunt eum illum magnam minima minus necessitatibus pariatur quis, quod repellat, sed velit
                        voluptas. Accusamus alias amet atque beatae corporis, eum eveniet facere fuga illo, laborum
                        magnam molestias non pariatur quaerat quo quos ratione reiciendis sed.
                    </p>
                </div>
            </div>
            <UsifulLinks/>
        </div>
    )
}