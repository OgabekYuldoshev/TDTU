import React from 'react'
import Button from '../../components/Button'
import FaculityCard from '../../components/FaculityCard'
import MainSwiper from '../../components/MainSwiper'
import NewsCard from '../../components/NewsCard'
import CardStudent from '../../components/CardStudent'
import UsifulLinks from '../../components/UsifulLinksSwiper'
import InterActive from '../../components/InterActive'


const Home = () => {
    return (
        <section>
            {/* asosiy swiper */}
            <MainSwiper />
            <div>
                {/* yangiliklar */}
                <section className='py-14'>
                    <div className='responsive flex justify-between items-end w-full border-b'>
                        <h2 className='md:text-2xl text-base mb-0'>Yangiliklar va e’lonlar</h2>
                        <div>
                            <Button className="px-2 py-1" title='Barchasini ko’rish' />
                        </div>
                    </div>
                    <div className='responsive mt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
                </section>

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
                <section className='py-14'>
                    <div className='responsive flex justify-between items-end w-full border-b'>
                        <h2 className='md:text-2xl text-base mb-0'>Biznning Bitiruvchilar</h2>
                    </div>
                    <div className='responsive mt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5'>
                        <CardStudent />
                        <CardStudent />
                        <CardStudent />
                        <CardStudent />
                    </div>
                </section>

                {/* kafediralar */}
                <div style={{ backgroundPosition: "center", backgroundSize: "cover", background: 'url(https://images.unsplash.com/photo-1561835674-4fe6ec5b0d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)' }} className="bg-cover bg-center py-[60px]">
                    <div className='responsive'>
                        <div className='backdrop-blur-sm bg-primary_gray bg-opacity-20 border-2 border-primary_lightgray rounded p-14 border-opacity-50'>
                            <div className='flex flex-col items-center justify-center'>
                                <span className='text-2xl text-white font-semibold mb-0'>21</span>
                                <p className='text-xl text-white font-semibold mb-0'>Kafedralar</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* interaktive xizmatlar */}
                {/* <InterActive /> */}
                {/* foydali havolalar */}
                <UsifulLinks />
            </div>
        </section>
    )
}

export default Home