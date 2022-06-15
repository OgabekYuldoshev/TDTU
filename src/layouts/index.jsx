import React from 'react'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='bg-primary_lightgray m-auto'>
                {children}
            </main>
            <Footer />
        </>

    )
}

export default Layout