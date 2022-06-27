import React, { useEffect, useState } from 'react'
import { Napa, PolitexTexture } from '../../assets/svg'
import Logo from "../../assets/png/logo.png"
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import { BsTelegram, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs"
import { FaVk } from "react-icons/fa"
import { toast } from 'react-toastify'
import { http } from "../../servises"
import { get } from "lodash"

const Footer = () => {
    const { t } = useTranslation()
    const [socials, setSocials] = useState([])

    useEffect(() => {
        const fetch = async () => {
            await http.request.get("/public/api/networks").then((res => {
                const resData = get(res, 'data.data')
                setSocials(resData)
            })).catch((error) => {
                toast.error(`Error: ${  error}`)
                console.log(error)
            })
        }
        fetch()
    }, [])

    const links = [
        {
            name: t('university'),
            link: '/unversity'
        },
        {
            name: t('electron_library'),
            link: '/unversity'
        },
        {
            name: t('schema'),
            link: '/unversity'
        },
        {
            name: t('finansical_activity'),
            link: '/unversity'
        },
        {
            name: t('activity'),
            link: '/unversity'
        },
        {
            name: t('grand_projects'),
            link: '/unversity'
        },
        {
            name: t('news'),
            link: '/unversity'
        },
        {
            name: t('elective_course'),
            link: '/unversity'
        },
        {
            name: t('students'),
            link: '/unversity'
        },
        {
            name: t('scientific_journal'),
            link: '/unversity'
        },
        {
            name: t('abiturents'),
            link: '/unversity'
        },
        {
            name: t('corruption_free_sector'),
            link: '/unversity'
        },
        {
            name: t('hemis'),
            link: '/unversity'
        }
    ]


    return (
        <footer>
            {/* <div className='bg-primary_lightgray text-white relative overflow-hidden border-b-2 flex items-end divide-x-2'>
                <div className='group flex items-center justify-center p-2 flex-col bg-primary_green w-1/3 cursor-pointer'>
                    <span>
                        Tashrif buyurish
                    </span>
                    <div className='group-hover:h-full h-0 transform duration-300 overflow-hidden'>
                        <div className='px-5 mt-2'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptatibus recusandae quisquam corrupti, totam natus quam impedit libero ex officiis architecto repellat iste eum? Possimus sed qui excepturi iure distinctio? Nihil doloribus impedit mollitia. Dolorem harum repudiandae voluptates, non saepe, quod cumque ex, eius ducimus voluptatem est. Harum, aspernatur expedita.
                        </div>
                    </div>
                </div>
                <div className='group flex items-center justify-center p-2 flex-col bg-primary_green w-1/3 cursor-pointer'>
                    <span>
                        Qabul 2022
                    </span>
                    <div className='group-hover:h-full h-0 transform duration-300 overflow-hidden'>
                        <div className='px-5 mt-2'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptatibus recusandae quisquam corrupti, totam natus quam impedit libero ex officiis architecto repellat iste eum? Possimus sed qui excepturi iure distinctio? Nihil doloribus impedit mollitia. Dolorem harum repudiandae voluptates, non saepe, quod cumque ex, eius ducimus voluptatem est. Harum, aspernatur expedita.
                        </div>
                    </div>
                </div>
                <div className='group flex items-center justify-center p-2 flex-col bg-primary_green w-1/3 cursor-pointer'>
                    <span>
                        Contact
                    </span>
                    <div className='group-hover:h-full h-0 transform duration-300 overflow-hidden'>
                        <div className='px-5 mt-2'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptatibus recusandae quisquam corrupti, totam natus quam impedit libero ex officiis architecto repellat iste eum? Possimus sed qui excepturi iure distinctio? Nihil doloribus impedit mollitia. Dolorem harum repudiandae voluptates, non saepe, quod cumque ex, eius ducimus voluptatem est. Harum, aspernatur expedita.
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='bg-primary_green responsive text-white relative overflow-hidden'>
                <h2 className='md:text-2xl z-20 relative text-center font-bold text-white mt-[60px]'>
                    {t("university_name")}
                </h2>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:my-[106px] my-[50px] justify-center gap-5 z-20 relative'>
                    <div className='hidden md:flex flex-col gap-5 items-center'>
                        <img src={Logo} className="w-[300px]" alt="logo" />
                        <div className='flex items-center justify-center gap-8'>
                            <a href={get(socials, '[0].telegram')} className='text-white'>
                                <BsTelegram className='text-3xl' />
                            </a>
                            <a href={get(socials, '[0].instagram')} className='text-white'>
                                <BsInstagram className='text-3xl' />
                            </a>
                            <a href={get(socials, '[0].twitter')} className='text-white'>
                                <BsTwitter className='text-3xl' />
                            </a>
                            <a href={get(socials, '[0].facebook')} className='text-white'>
                                <BsFacebook className='text-3xl' />
                            </a>
                            <a href={get(socials, '[0].vkontakte')} className='text-white'>
                                <FaVk className='text-3xl' />
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        {
                            links.map(link => <Link className='font-base text-white sm:bg-transparent bg-primary_lightgray bg-opacity-50 sm:text-start text-center px-5 py-2 rounded' key={link.name} to={link.link}>{link.name}</Link>)
                        }
                    </div>
                    <div>
                        <iframe className='w-full h-full rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.74398629114!2d69.1392823695852!3d41.282770555806366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sru!4v1655208641572!5m2!1sen!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='mb-10 md:hidden block'>
                    <h2 className='text-white text-lg text-center mb-8'>{t('our_in_social_networks')}</h2>
                    <div className='flex items-center justify-center gap-8'>
                        <a href={get(socials, '[0].telegram')} className='text-white'>
                            <BsTelegram className='text-3xl' />
                        </a>
                        <a href={get(socials, '[0].instagram')} className='text-white'>
                            <BsInstagram className='text-3xl' />
                        </a>
                        <a href={get(socials, '[0].twitter')} className='text-white'>
                            <BsTwitter className='text-3xl' />
                        </a>
                        <a href={get(socials, '[0].facebook')} className='text-white'>
                            <BsFacebook className='text-3xl' />
                        </a>
                        <a href={get(socials, '[0].vkontakte')} className='text-white'>
                            <FaVk className='text-3xl' />
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 z-10">
                    <PolitexTexture />
                </div>
            </div>
            <div className='bg-primary_green_darken xl:px-[140px] md:px-[60px] sm:px-[30px] px-[15px] text-white py-[12px] flex justify-between items-center'>
                <span>
                    © TDTU 2022
                </span>
                <span className='text-sm'>
                    <Napa />
                </span>
            </div>
        </footer>
    )
}

export default Footer