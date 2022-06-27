const menus = [
    {
        id: 1,
        title: "university",
        children: [
            {
                id: 1,
                title: 'rector_congratulations',
                path: '/university/rector_congratulations'
            },
            {
                id: 2,
                title: 'requisites',
                path: '/university/requisites'
            },
            {
                id: 3,
                title: 'university_regulations',
                path: '/university/university_regulations'
            },
            {
                id: 4,
                title: 'virtual_reception',
                path: '/university/virtual_reception'
            },
            {
                id: 5,
                title: 'regulatory_documents',
                path: '/university/regulatory_documents'
            },
            {
                id: 6,
                title: 'history_of_university',
                path: '/university/history_of_university'
            }
        ]
    },
    {
        id: 2,
        title: "structure",
        children: [
            {
                id: 1,
                title: 'rectorate',
                path: '/structure/rectorate'
            },
            {
                id: 2,
                title: 'centers',
                children: [
                    {
                        id: 1,
                        title: 'information_center',
                        path: '/centers/information_center'
                    },
                    {
                        id: 2,
                        title: 'digital_learning_technologies_center',
                        path: '/centers/digital_learning_technologies_center'
                    },
                    {
                        id: 3,
                        title: 'personal_training_center',
                        path: '/centers/personal_training_center'
                    },
                    {
                        id: 4,
                        title: 'japan_innovation_center',
                        path: '/centers/japan_innovation_center'
                    },
                    {
                        id: 5,
                        title: 'industrial_training_center',
                        path: '/centers/industrial_training_center'
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
                        path: '/sections/master_system'
                    },
                    {
                        id: 3,
                        title: 'researching_system_section',
                        path: '/sections/researching_system_section'
                    },
                    {
                        id: 4,
                        title: 'teaching_methodology_section',
                        path: '/sections/teaching_methodology_section'
                    },
                    {
                        id: 5,
                        title: 'inside_monitoring_section',
                        path: '/sections/inside_monitoring_section'
                    },
                    {
                        id: 6,
                        title: 'science_section',
                        path: '/sections/science_section'
                    },
                    {
                        id: 7,
                        title: 'gifted_students_section',
                        path: '/sections/gifted_students_section'
                    },
                    {
                        id: 8,
                        title: 'human_resources_section',
                        path: '/sections/human_resources_section'
                    },
                    {
                        id: 9,
                        title: 'youth_union_department_section',
                        path: '/sections/youth_union_department_section'
                    },
                    {
                        id: 10,
                        title: 'accounting_section',
                        path: '/sections/accounting_section'
                    },
                    {
                        id: 11,
                        title: 'monitoring_of_graduates_section',
                        path: '/sections/monitoring_of_graduates_section'
                    },
                    {
                        id: 12,
                        title: 'industrial_economics_section',
                        path: '/sections/industrial_economics_section'
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
                title: 'branches',
                children: [
                    {
                        id: 1,
                        title: 'olmaliq_branch',
                        path: '/branches/olmaliq_branch'
                    },
                    {
                        id: 2,
                        title: 'qoqon_branch',
                        path: '/branches/qoqon_branch'
                    },
                    {
                        id: 3,
                        title: 'termiz_branch',
                        path: '/branches/termiz_branch'
                    }
                ]
            },
            {
                id: 7,
                title: 'tdtu_structure',
                path: '/tdtu_structure'
            }
        ]
    },
    {
        id: 3,
        title: "activity",
        children: [
            {
                id: 1,
                title: 'science_and_innovation',
                children: [
                    {
                        title: 'science',
                        path: '/activity/science'
                    },
                    {
                        title: 'innovation',
                        path: '/activity/innovation'
                    },
                    {
                        title: 'doktorantura',
                        path: '/activity/doktorantura'
                    }
                ]
            },
            {
                id: 5,
                title: 'financial_activity',
                path: '/activity/financial_activity'
            },
            {
                id: 2,
                title: 'working_with_young_people',
                path: '/activity/working_with_young_people'
            },
            {
                id: 3,
                title: 'cultural_and_enlightenment',
                path: '/activity/cultural_and_enlightenment'
            },
            {
                id: 4,
                title: 'international_relations',
                children: [
                    {
                        id: 1,
                        title: 'department_of_international_cooperation',
                        path: '/activity/department_of_international_cooperation'
                    },
                    {
                        id: 2,
                        title: 'creative_spark',
                        path: '/activity/creative_spark'
                    },
                    {
                        id: 3,
                        title: 'erasmus',
                        children: [
                            {
                                id: 1,
                                title: 'mechauz',
                                path: '/activity/mechauz'
                            },
                            {
                                id: 2,
                                title: 'space_com',
                                path: '/activity/space_com'
                            },
                            {
                                id: 3,
                                title: 'ka107',
                                path: '/activity/ka107'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "students",
        children: [
            {
                id: 1,
                title: 'bachelor',
                path: '/students/bachelor'
            },
            {
                id: 2,
                title: 'magister',
                path: '/students/magister'
            },
            {
                id: 3,
                title: 'evening_education',
                path: '/students/evening_education'
            },
            {
                id: 4,
                title: 'distance_learning',
                path: '/students/distance_learning'
            },
            {
                id: 5,
                title: 'alumni_club',
                path: '/students/alumni_club'
            }
        ]
    },
    {
        id: 5,
        title: "scientific_activity",
        children: [
            {
                id: 1,
                title: 'technology_stars',
                path: '/scientific_activity/technology_stars'
            },
            {
                id: 2,
                title: 'young_tech_stars',
                path: '/scientific_activity/young_tech_stars'
            },
            {
                id: 3,
                title: 'social_sciences_and_humanities',
                path: '/scientific_activity/social_sciences_and_humanities'
            },
            {
                id: 4,
                title: 'master_class',
                path: '/scientific_activity/master_class'
            }
        ]
    },
    {
        id: 6,
        title: "applicant",
        children: [
            {
                id: 1,
                title: 'bachelor',
                path: '/applicant/bachelor'
            },
            {
                id: 2,
                title: 'magister',
                path: '/applicant/magister'
            },
            {
                id: 3,
                title: 'parttime_and_evening_education',
                path: '/applicant/parttime_and_evening_education'
            },
            {
                id: 4,
                title: 'co_curricular_programs',
                path: '/applicant/co_curricular_programs'
            },
            {
                id: 5,
                title: 'foreign_citizenr',
                path: '/applicant/foreign_citizenr'
            }
        ]
    },
    {
        id: 7,
        title: "no_corruption",
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
        path: '/activity/financial_activity'
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