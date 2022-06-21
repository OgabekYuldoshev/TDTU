import React from 'react'
import Header from './Header'
import Footer from './Footer'
import TopHead from "../components/TopHead"

const Layout = ({ children }) => {
    return (
        <>
            {/*<TopHead />*/}
            {/*<Header />*/}
            <main className='bg-primary_lightgray m-auto'>
                {children}
            </main>
            {/*<Footer />*/}
        </>

    )
}

export default Layout