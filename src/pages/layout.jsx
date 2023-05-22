import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({page}) => {
    return (
    <>
        <Header/>
        {page}
        <Footer/>
    </>
)}

export default Layout
