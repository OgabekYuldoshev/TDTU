const menus = [
    {
        id: 1,
        title: "university",
        children: [
            {
                id: 1,
                title: 'rector_congratulations',
                path: '/rector_congratulations'
            },
            {
                id: 2,
                title: 'requisites',
                path: '/requisites'
            },
            {
                id: 3,
                title: 'university_regulations',
                path: '/university_regulations'
            },
            {
                id: 4,
                title: 'virtual_reception',
                path: '/virtual_reception'
            },
            {
                id: 5,
                title: 'regulatory_documents',
                path: '/regulatory_documents'
            },
            {
                id: 6,
                title: 'history_of_university',
                path: '/history_of_university'
            }
        ]
    },
    {
        id: 2,
        title: "structure",
        children: [
            {
                id: 1,
                title: 'rektorat',
                path: '/rektorat'
            },
            {
                id: 2,
                title: 'centers',
                children: [
                    {
                        id: 1,
                        title: 'information_center',
                        path: '/information_center'
                    },
                    {
                        id: 2,
                        title: 'digital_learning_technologies_center',
                        path: '/digital_learning_technologies_center'
                    },
                    {
                        id: 3,
                        title: 'personal_training_center',
                        path: '/personal_training_center'
                    },
                    {
                        id: 4,
                        title: 'japan_innovation_center',
                        path: '/japan_innovation_center'
                    },
                    {
                        id: 5,
                        title: 'industrial_training_center',
                        path: '/industrial_training_center'
                    }
                ]
            },
            {
                id: 3,
                title: 'sections',
                children: [
                    {
                        id: 1,
                        title: 'master_system_section',
                        path: '/master_system'
                    },
                    {
                        id: 3,
                        title: 'researching_system_section',
                        path: '/researching_system_section'
                    },
                    {
                        id: 4,
                        title: 'teaching_methodology_section',
                        path: '/teaching_methodology_section'
                    },
                    {
                        id: 5,
                        title: 'inside_monitoring_section',
                        path: '/inside_monitoring_section'
                    },
                    {
                        id: 6,
                        title: 'science_section',
                        path: '/science_section'
                    },
                    {
                        id: 7,
                        title: 'gifted_students_section',
                        path: '/gifted_students_section'
                    },
                    {
                        id: 8,
                        title: 'human_resources_section',
                        path: '/human_resources_section'
                    },
                    {
                        id: 9,
                        title: 'youth_union_department_section',
                        path: '/youth_union_department_section'
                    },
                    {
                        id: 10,
                        title: 'accounting_section',
                        path: '/accounting_section'
                    },
                    {
                        id: 11,
                        title: 'monitoring_of_graduates_section',
                        path: '/monitoring_of_graduates_section'
                    },
                    {
                        id: 12,
                        title: 'industrial_economics_section',
                        path: '/industrial_economics_section'
                    }
                ]
            },
            {
                id: 4,
                title: 'faculties',
                path: '/'
            },
            {
                id: 5,
                title: 'chairs',
                path: '/'
            },
            {
                id: 6,
                title: 'Filiallar',
                children: [
                    {
                        id: 1,
                        title: 'Islom Karimov nomidagi Toshkent davlat texnika universiteti Olmaliq filiali',
                        path: '/'
                    },
                    {
                        id: 2,
                        title: 'Islom Karimov nomidagi Toshkent davlat texnika universiteti qoqon filiali',
                        path: '/'
                    },
                    {
                        id: 3,
                        title: 'Islom Karimov nomidagi Toshkent davlat texnika universiteti termiz filiali',
                        path: '/'
                    }
                ]
            },
            {
                id: 7,
                title: 'TDTU tuzilmasi',
                path: '/'
            }
        ]
    },
    {
        id: 3,
        title: "Faoliyat",
        children: [
            {
                id: 1,
                title: 'Fan va innovatsiya',
                children: [
                    {
                        title: 'Fan',
                        path: '/'
                    },
                    {
                        title: 'innovatsiya',
                        path: '/'
                    },
                    {
                        title: 'doktorantura',
                        path: '/'
                    }
                ]
            },
            {
                id: 2,
                title: 'Yoshlar bilan ishlash',
                path: '/'
            },
            {
                id: 3,
                title: 'Madaniy-Ma’rifiy',
                path: '/'
            },
            {
                id: 4,
                title: 'Xalqaro aloqalar',
                children: [
                    {
                        id: 1,
                        title: 'xalqaro hamkorlik bo’limi',
                        path: '/'
                    },
                    {
                        id: 2,
                        title: 'creative spark',
                        path: '/'
                    },
                    {
                        id: 3,
                        title: 'erasmus',
                        children: [
                            {
                                id: 1,
                                title: 'Mechauz',
                                path: '/'
                            },
                            {
                                id: 2,
                                title: 'space.com',
                                path: '/'
                            },
                            {
                                id: 3,
                                title: 'ka107',
                                path: '/'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Talabalar",
        children: [
            {
                id: 1,
                title: 'Bakalavriat',
                path: '/'
            },
            {
                id: 2,
                title: 'Magistratura',
                path: '/'
            },
            {
                id: 3,
                title: 'Kechki ta’lim',
                path: '/'
            },
            {
                id: 4,
                title: 'Sirtqi ta’lim',
                path: '/'
            },
            {
                id: 5,
                title: 'Bitiruvchilar klubi',
                path: '/'
            }
        ]
    },
    {
        id: 5,
        title: "Ilmiy Faoliyat",
        children: [
            {
                id: 1,
                title: 'Texnika yulduzlari',
                path: '/'
            },
            {
                id: 2,
                title: 'Yosh texnika yulduzlari',
                path: '/'
            },
            {
                id: 3,
                title: 'Ta’lim tizimida ijtimoiy gumanitar fanlar',
                path: '/'
            },
            {
                id: 4,
                title: 'Mahorat darskari',
                path: '/'
            }
        ]
    },
    {
        id: 6,
        title: "Abituriyent",
        children: [
            {
                id: 1,
                title: 'Bakalavriat',
                path: '/'
            },
            {
                id: 2,
                title: 'Magistratura',
                path: '/'
            },
            {
                id: 3,
                title: 'Sirtqi va kechki ta’lim shakillari',
                path: '/'
            },
            {
                id: 4,
                title: 'Qo’shma ta’lim dasturlari',
                path: '/'
            },
            {
                id: 5,
                title: 'Xorijiy Fuqarolar',
                path: '/'
            }
        ]
    },
    {
        id: 7,
        title: "Korrupsiyasiz soha",
        children: [
            {
                id: 1,
                title: 'TDTU DAVLAT XARID OIDLARIGA TUZILGAN SHARTNOMALAR',
                path: '/'
            },
            {
                id: 2,
                title: 'ISH HAQINI HISOBLASH VA MUKOFOTLARNI TAQSIMLASH QOIDALARI',
                path: '/'
            },
            {
                id: 3,
                title: 'MUASSASA BYUDJETI',
                path: '/'
            },
            {
                id: 4,
                title: 'FAN DASTURLARI',
                path: '/'
            },
            {
                id: 5,
                title: 'NAMUNAVIY ORALIQ VA YAKUNIY NAZORAT SAVOLLARINI SEMESTR BOSHLANGANDAN SO’NG BIR OY ICHIDA WEB-SAYTGA JOYLASHTIRISH',
                path: '/'
            },
            {
                id: 6,
                title: 'XODIMLARNING AKADEMIK PROFILI',
                path: '/'
            },
            {
                id: 7,
                title: 'TA’LIM YO’NALISHLARI VA MUTAXASSISLIKLARNING MALAKA TALABLARI',
                path: '/'
            },
            {
                id: 8,
                title: 'PROFESSOR-O’QITUVCHILARGA QO’YILGAN TALABLAR',
                path: '/'
            },
            {
                id: 9,
                title: 'KORRUPSIYAGA OID HOLATLAR BO’YICHA TALABLAR VA O’QITUVCHILARNING TO’G’RIDAN TO’G’RIMUASSASI RAHBARIYATIGA ANONIMHAMDA JAMOAVIY MUROJAAT QILISH IMKONIATINI',
                path: '/'
            }
        ]
    },
    {
        id: 8,
        title: "news",
        path: '/news'
    },
]


const paths = [
    {
        title: "financial_activity",
        path: '/financial_activity'
    },
    {
        title: "electronic_library",
        path: '/electronic_library'
    },
    {
        title: "preparatory_course",
        path: '/'
    },
    {
        title: "hemis",
        path: '/hemis'
    }
]

export { menus, paths }