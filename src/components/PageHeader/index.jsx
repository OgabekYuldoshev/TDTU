import { HomeOutlined } from '@ant-design/icons'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const PageHeader = ({ title, paths }) => {
    const { t } = useTranslation()

    return (
        <div className='responsive flex justify-between items-end w-full border-b mb-8 mt-5'>
            <h2 className='md:text-2xl text-base mb-0'>{t(title)}</h2>
            <div className='flex items-end gap-1font-semibold'>
                <Link className='text-black' to="/">
                    {t('home')}
                </Link>
                {
                    paths?.map(path => (
                        <>
                            {"/"}{
                                path?.path ? <Link className='text-black mb-0 pb-0' to={path?.path}>{t(path?.title)}</Link> : <span className='text-black mb-0 pb-0'>{t(path?.title)}</span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default PageHeader