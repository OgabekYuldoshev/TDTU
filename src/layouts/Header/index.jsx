import Menu from '../Menu/Menu'
import React from 'react'
import DesktopMenu from '../Menu/Desktop'
import TabMenu from '../Menu/Tab'
import Mobile from '../Menu/Mobile'
import { useMediaQuery } from '../../hooks'
import { useState } from 'react'

const Header = () => {
    const tab = useMediaQuery('(min-width: 768px)')
    const mobile = useMediaQuery('(min-width: 640px)')
    const [siteMap, setSiteMap] = useState(false)
    return (
        <header className='bg-primary_green text-white'>
            <div className='md:block hidden relative xl:px-[140px] md:px-[60px]'>
                <DesktopMenu menu={siteMap} onClose={() => setSiteMap(false)} />
                <Menu onOpen={() => setSiteMap(true)} />
            </div>
            {
                !tab && mobile && (
                    <div className='md:hidden block relative'>
                        <TabMenu />
                    </div>
                )
            }
            {
                !mobile && (
                    <div className='sm:hidden block  relative'>
                        <Mobile />
                    </div>
                )
            }
        </header>
    )
}

export default Header