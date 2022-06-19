import React, { useRef, useState } from 'react'
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useClickOutside } from "react-haiku"
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri"
import LogoGreen from "../../assets/png/logoGreen.png"
const menus = [
    {
        name: "Universitet",
        children: [
            {
                name: 'Rektor Tabrigi',
                link: '/'
            },
            {
                name: 'Rekvizitlar',
                link: '/'
            },
            {
                name: 'Universitet nizomi',
                link: '/'
            },
            {
                name: 'Rektor virtual qabulxonasi',
                link: '/'
            },
            {
                name: 'Me’yoriy xujjatlar',
                link: '/'
            },
            {
                name: 'UNIVERSITET TARIXI',
                link: '/'
            }
        ]
    },
    {
        name: "Tuzilma",
        children: [
            {
                name: 'Rektorat',
                link: '/'
            },
            {
                name: 'Markazlar',
                children: [
                    {
                        name: 'Axborot resurs markazi',
                        link: '/'
                    },
                    {
                        name: 'Raqamki ta’lim texnologiayalari markazi',
                        link: '/'
                    },
                    {
                        name: 'Kadrlar malakasini oshirish va qayta tayyorlash o’quv markazi',
                        link: '/'
                    },
                    {
                        name: 'O’zbek-Yapon yoshlar innovatsiya markazi',
                        link: '/'
                    },
                    {
                        name: 'Sanoat energiya auditi amaliy-o’quv markazi',
                        link: '/'
                    }
                ]
            },
            {
                name: 'Bo’limlar',
                children: [
                    {
                        name: 'Magistratura tizimi',
                        link: '/'
                    },
                    {
                        name: 'Magistratura tizimi',
                        link: '/'
                    },
                    {
                        name: 'Ilmiy tadqiqotlar, innovatsiyalar va ilmiy-pedagogik kadrlar tayyorlash bo’limi',
                        link: '/'
                    },
                    {
                        name: 'O’quv uslubiy boshqarma',
                        link: '/'
                    },
                    {
                        name: 'Ichki nazorat va monitoring bo’limi',
                        link: '/'
                    },
                    {
                        name: 'Ilmiy bo’lim',
                        link: '/'
                    },
                    {
                        name: 'Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish bo’limi',
                        link: '/'
                    },
                    {
                        name: 'Xodimlar bo’limi',
                        link: '/'
                    },
                    {
                        name: 'Yoshlar ittifoqi bo’limi',
                        link: '/'
                    },
                    {
                        name: 'Buxgalteriya bo’limi',
                        link: '/'
                    },
                    {
                        name: 'Buyurtmalar portfelini shakllantirish, bitiruvchilarni ishga taqsimlashva monitoring bo’limi',
                        link: '/'
                    },
                    {
                        name: 'Sanoat iqtisodiyoti bo’limi',
                        link: '/'
                    }
                ]
            },
            {
                name: 'Fakultetlar',
                link: '/'
            },
            {
                name: 'Kafedralar',
                link: '/'
            },
            {
                name: 'Filiallar',
                children: [
                    {
                        name: 'Islom Karimov nomidagi Toshkent davlat texnika universiteti Olmaliq filiali',
                        link: '/'
                    },
                    {
                        name: 'Islom Karimov nomidagi Toshkent davlat texnika universiteti qoqon filiali',
                        link: '/'
                    },
                    {
                        name: 'Islom Karimov nomidagi Toshkent davlat texnika universiteti termiz filiali',
                        link: '/'
                    }
                ]
            },
            {
                name: 'TDTU tuzilmasi',
                link: '/'
            }
        ]
    },
    {
        name: "Faoliyat",
        children: [
            {
                name: 'Fan va innovatsiya',
                children: [
                    {
                        name: 'Fan',
                        link: '/'
                    },
                    {
                        name: 'innovatsiya',
                        link: '/'
                    },
                    {
                        name: 'doktorantura',
                        link: '/'
                    }
                ]
            },
            {
                name: 'Yoshlar bilan ishlash',
                link: '/'
            },
            {
                name: 'Madaniy-Ma’rifiy',
                link: '/'
            },
            {
                name: 'Xalqaro aloqalar',
                children: [
                    {
                        name: 'xalqaro hamkorlik bo’limi',
                        link: '/'
                    },
                    {
                        name: 'creative spark',
                        link: '/'
                    },
                    {
                        name: 'erasmus',
                        children: [
                            {
                                name: 'Mechauz',
                                link: '/'
                            },
                            {
                                name: 'space.com',
                                link: '/'
                            },
                            {
                                name: 'ka107',
                                link: '/'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Talabalar",
        children: [
            {
                name: 'Bakalavriat',
                link: '/'
            },
            {
                name: 'Magistratura',
                link: '/'
            },
            {
                name: 'Kechki ta’lim',
                link: '/'
            },
            {
                name: 'Sirtqi ta’lim',
                link: '/'
            },
            {
                name: 'Bitiruvchilar klubi',
                link: '/'
            }
        ]
    },
    {
        name: "Ilmiy Faoliyat",
        children: [
            {
                name: 'Texnika yulduzlari',
                link: '/'
            },
            {
                name: 'Yosh texnika yulduzlari',
                link: '/'
            },
            {
                name: 'Ta’lim tizimida ijtimoiy gumanitar fanlar',
                link: '/'
            },
            {
                name: 'Mahorat darskari',
                link: '/'
            }
        ]
    },
    {
        name: "Abituriyent",
        children: [
            {
                name: 'Bakalavriat',
                link: '/'
            },
            {
                name: 'Magistratura',
                link: '/'
            },
            {
                name: 'Sirtqi va kechki ta’lim shakillari',
                link: '/'
            },
            {
                name: 'Qo’shma ta’lim dasturlari',
                link: '/'
            },
            {
                name: 'Xorijiy Fuqarolar',
                link: '/'
            }
        ]
    },
    {
        name: "Korrupsiyasiz soha",
        children: [
            {
                name: 'TDTU DAVLAT XARID OIDLARIGA TUZILGAN SHARTNOMALAR',
                link: '/'
            },
            {
                name: 'ISH HAQINI HISOBLASH VA MUKOFOTLARNI TAQSIMLASH QOIDALARI',
                link: '/'
            },
            {
                name: 'MUASSASA BYUDJETI',
                link: '/'
            },
            {
                name: 'FAN DASTURLARI',
                link: '/'
            },
            {
                name: 'NAMUNAVIY ORALIQ VA YAKUNIY NAZORAT SAVOLLARINI SEMESTR BOSHLANGANDAN SO’NG BIR OY ICHIDA WEB-SAYTGA JOYLASHTIRISH',
                link: '/'
            },
            {
                name: 'XODIMLARNING AKADEMIK PROFILI',
                link: '/'
            },
            {
                name: 'TA’LIM YO’NALISHLARI VA MUTAXASSISLIKLARNING MALAKA TALABLARI',
                link: '/'
            },
            {
                name: 'PROFESSOR-O’QITUVCHILARGA QO’YILGAN TALABLAR',
                link: '/'
            },
            {
                name: 'KORRUPSIYAGA OID HOLATLAR BO’YICHA TALABLAR VA O’QITUVCHILARNING TO’G’RIDAN TO’G’RIMUASSASI RAHBARIYATIGA ANONIMHAMDA JAMOAVIY MUROJAAT QILISH IMKONIATINI',
                link: '/'
            }
        ]
    },
    {
        name: "Yangiliklar"
    },
]


const Menu = () => {
    const [search, setSearch] = useState(false)
    const [selected, setSelect] = useState(null)
    const [selected2, setSelect2] = useState(null)

    const ref = useRef(null)
    const handleShow = (value) => setSelect(value)
    const handleCancel = () => {
        setSelect(null)
        setSelect2(null)
    }

    useClickOutside(ref, handleCancel);



    return (
        <div className='w-full  absolute top-full left-0 transform -translate-y-5 '>
            <div className='mx-[140px] relative'>
                <div className='bg-white py-[15px] px-5 shadow rounded flex items-center justify-between'>
                    <div>
                        <AiOutlineSearch fontSize={20} onClick={() => setSearch(current => !current)} />
                    </div>
                    {
                        search ? (
                            <div className='flex justify-between items-center gap-10 text-base '>
                                <input type="text" className='border w-full' />
                            </div>
                        ) : (
                            <div className='flex justify-between items-center gap-10 text-base'>
                                {
                                    menus.map(menu => (
                                        <button key={menu.name} onClick={() => handleShow(menu)} className='cursor-pointer'>{menu.name}</button>
                                    ))
                                }
                            </div>
                        )
                    }

                    <div>
                        {
                            search ? <AiOutlineClose fontSize={20} onClick={() => setSearch(false)} /> : <AiOutlineMenu fontSize={20} />
                        }
                    </div>
                </div>

                <div className={`${selected ? 'visible' : 'invisible'} overflow-hidden bg-white top-full left-0  shadow absolute w-full mt-1 shadow rounded duration-300 z-50 `}>
                    <div ref={ref} className={`px-3 px-[70px] py-[25px]`}>
                        <div className='grid grid-cols-3 gap-5 block relative'>
                            <div>
                                <h2 className='text-xl font-bold'>{selected?.name}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, autem tempore. Ducimus veritatis vero dolorum earum sit quis velit</p>
                            </div>
                            <div>
                                <ul className='flex flex-col gap-2'>
                                    {
                                        selected?.children?.map(item => (
                                            <li key={item} onClick={() => setSelect2(item)} className={`${selected2?.name === item.name && "bg-primary_green rounded text-white"} border-b hover:bg-primary_green hover:rounded border-primary_green px-4 py-2 duration-300 hover:text-white flex justify-between items-center`}>
                                                <span>{item?.name}</span>
                                                {!!item.children && (selected2?.name === item.name ? <RiArrowLeftSFill /> : <RiArrowRightSFill />)}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='relative z-50'>
                                <ul className='flex flex-col gap-2'>
                                    {
                                        selected2?.children?.map(item => (
                                            <li key={item} onClick={() => setSelect2(item)} className='border-b hover:bg-primary_green hover:rounded border-primary_green px-4 py-2 duration-300 hover:text-white flex justify-between items-center'>
                                                <span>{item?.name}</span>
                                                {!!item.children && <RiArrowLeftSFill />}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <img className='absolute right-0 w-48 opacity-10 select-none z-10' src={LogoGreen} alt="logo" />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu