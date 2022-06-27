import React from 'react'
import FaculityCard from '../../components/FaculityCard'
import MainSwiper from '../../components/MainSwiper'
import UsifulLinks from '../../components/UsifulLinksSwiper'
import InterActive from '../../components/InterActive'
import OurGraduats from '../../components/OurGraduats'
import Facts from '../../components/Facts'
import Workers from '../../components/Workers'
import NewsSection from '../../components/NewsSection'


const Home = () => {
    return (
        <section>
            {/* asosiy swiper */}
            <MainSwiper />
            <div>
                {/* yangiliklar */}
                <NewsSection />

                {/* banner */}
                <img className='w-full h-[800px] object-cover object-center' src="https://images.unsplash.com/photo-1627556704353-016baeb12c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="photo" />

                {/* fakultetlar */}
                <section className='py-14'>
                    <div className='responsive flex justify-between items-end w-full border-b'>
                        <h2 className='md:text-2xl text-base mb-0'>Fakultetlar</h2>
                    </div>
                    <div className='responsive mt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5'>
                        <FaculityCard />
                        <FaculityCard />
                        <FaculityCard />
                        <FaculityCard />
                    </div>
                </section>

                {/* bitiruvchilar */}
                <OurGraduats />

                {/* kafediralar */}
                <Facts />
                <Workers />
                {/* interaktive xizmatlar */}
                <InterActive />
                {/* foydali havolalar */}
                <UsifulLinks />
            </div>
        </section>
    )
}

export default Home