import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

export const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Header />
            <Sidebar />
            <Footer />
            {children}
        </div>
    )
}
