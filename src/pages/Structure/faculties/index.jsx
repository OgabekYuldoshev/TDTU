import React from 'react'
import {useTranslation} from "react-i18next"
import UsifulLinks from "../../../components/UsifulLinksSwiper"
import HeaderImg from "../../../components/HeaderImg"
import Workers from "../../../components/Workers"
import DataFaculty from "../../../components/DataFaculty"
import FaculityCard from "../../../components/FaculityCard"
import Button from "../../../components/Button"

export default function Faculties() {

    const {t} = useTranslation()

    return (
        <>
            <HeaderImg text={"faculties"} paths={[
                {
                    title: 'faculties'
                }
            ]}/>
            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('faculty_structure')}</h2>
                {/*<RectorCard/>*/}
                RectorCard
            </div>
            <Workers/>
            <DataFaculty name={"undergraduate_majors"}/>
            <DataFaculty name={"masters_specialties"}/>
            <DataFaculty name={"bachelors_learning"}/>
            <div className='responsive flex justify-between items-end w-full border-b'>
                <h2 className='md:text-2xl text-base mb-0'>{t("faculty_chairs")}</h2>
                <div>
                    <Button className="px-2 py-1" title='Barchasini ko’rish'/>
                </div>
            </div>
            <div className='responsive mt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5'>
                <FaculityCard/>
                <FaculityCard/>
                <FaculityCard/>
                <FaculityCard/>
            </div>

            <div className='responsive flex justify-between items-end w-full border-b mt-10'>
                <h2 className='md:text-2xl text-base mb-0'>{t('faculty_history')}</h2>
            </div>
            <div className='responsive flex flex-col gap-5 mt-5'>
                <p className={"lg:text-xl md:text-base lg:leading-9 leading-6"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis dicta, doloremque
                    esse, ex inventore minima modi nisi nobis qui quibusdam recusandae rem rerum sapiente sint soluta
                    sunt ut voluptas. A ad aspernatur beatae deserunt ea eaque eius excepturi fugiat natus nemo numquam
                    possimus repudiandae, vel vero, voluptate voluptatem, voluptatibus. Adipisci deleniti dignissimos,
                    eaque eius fugit libero natus quibusdam veniam? Ab aperiam, aut consequatur consequuntur distinctio
                    et explicabo, impedit ipsam libero maxime molestias nemo nisi recusandae repellat sed. Adipisci
                    architecto assumenda, autem beatae culpa dicta doloribus eos iusto laudantium, libero mollitia,
                    necessitatibus quam qui sapiente sint tempore temporibus unde vel!
                </p>
            </div>

            <UsifulLinks/>
        </>
    )
}