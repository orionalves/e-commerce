import React from 'react'
import Layout from './pages/layout'
import Home from './pages/home'
import Cart from './pages/cart'
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
    const [quantity, setQuantity] = useState({})
    const [amount, setAmount] = useState(() => cartItens.reduce((accumulator, product) => accumulator + product.price, 0))

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    const handleCartItens = (item) => {
        setCartItens(item)
    }
    const handleQuantity = (item) => {
        setQuantity(item)
    }
    return(
    <Layout> 
        {screens.home === currentPage && <Home 
            changePage={handlePageChange} 
            cartItens={cartItens} 
            handleCartItens={handleCartItens} 
            quantity={quantity} 
            setQuantity={setQuantity}/>}
        {screens.cart === currentPage && <Cart 
            goToHome={handlePageChange} 
            goToCheckout={handlePageChange} 
            cartItens={cartItens} 
            handleCartItens={handleCartItens} 
            quantity={quantity} 
            setQuantity={setQuantity}
            handleQuantity={handleQuantity}
            amount={amount}
            setAmount={setAmount}/>}
        {screens.checkout === currentPage && <Checkout
            cartItens={cartItens}
            amount={amount}
            quantity={quantity}
            setAmount={setAmount}
            finish={handlePageChange}/>}
    </Layout>
)}

export default App