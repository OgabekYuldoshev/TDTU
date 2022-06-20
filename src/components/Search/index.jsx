import { SearchOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Search = ({ value = null, onClick = () => null }) => {
    const { t } = useTranslation()
    const [search, setSearch] = useState(value)
    return (
        <div className='border-b flex w-full items-center justify-between'>
            <input type="text" defaultValue={value} onChange={(e) => setSearch(e.target.value)} placeholder={t('search')} className="text-base p-2 focus:outline-none w-full bg-transparent" />
            <SearchOutlined onClick={() => onClick(search)} className="text-base p-2" />
        </div>
    )
}

export default Search