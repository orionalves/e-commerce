import React from 'react'
import Layout from './pages/layout'
import Home from './pages/home'
import Cart from './pages/cart/cart'
import { useState } from "react";

// export const screens = {
//   home: '<Home/>',
//   cart: '<Cart/>',
//   checkout: '<Checkout/>'
// }

export const screens = {
    home: 0,
    cart: 1,
    checkout: 2
}

// const home = '<Home/>'
// const cart = '<Cart onClick={}/>'
// const checkout = '<Checkout/>'
const App = () => { 
    const [currentPage, setCurrentPage] = useState(screens.home)
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    return(
    <Layout>
        {screens.home === currentPage && <Home changePage={handlePageChange}/>}
        {screens.cart === currentPage && <Cart/>}
        {screens.checkout === currentPage && <Checkout/>}
    </Layout>
)}

export default App