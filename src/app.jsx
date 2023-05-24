import React from 'react'
import Layout from './pages/layout'
import Home from './pages/home'
import Cart from './pages/cart/cart'
import Checkout from './pages/checkout'
import { useState } from "react";

export const screens = {
    home: 0,
    cart: 1,
    checkout: 2
}

const App = () => { 
    const [currentPage, setCurrentPage] = useState(screens.home)
    const [cartItens, setCartItens] = useState([])    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    const handleCartItens = (item) => {
        setCartItens(item)
    }
    return(
    <Layout> 
        {screens.home === currentPage && <Home changePage={handlePageChange} cartItens={cartItens} handleCartItens={handleCartItens}/>}
        {screens.cart === currentPage && <Cart goToHome={handlePageChange} goToCheckout={handlePageChange} cartItens={cartItens} handleCartItens={handleCartItens}/>}
        {screens.checkout === currentPage && <Checkout/>}
    </Layout>
)}

export default App