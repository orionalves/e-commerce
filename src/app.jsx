import React from 'react'
import Layout from './pages/layout'
import Home from './pages/home'
import Cart from './pages/cart'
import { useState } from "react";

// export const screens = {
//   home: '<Home/>',
//   cart: '<Cart/>',
//   checkout: '<Checkout/>'
// }

export const screens = {
    home: <Home/>,
    cart: <Cart/>,
    // checkout: <Checkout/>
}

const App = () => { 
    const [currentPage, setCurrentPage] = useState(screens.home)
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    // const [screen, setScreen] = useState(screens.home)
    // const [itens, setItens] = useState(products)
    // const [cart, setCart] = useState([])
    // const excluirDoCarrinho = (identificador) => {
    //     setItens(products.filter(item => item.id !== identificador))
    //   }
    
    //   const addCart = (item) => {
    //     setCart([...cart, item])
    //   }
    return(
    <Layout page={currentPage} onPageChange={handlePageChange}/>
)}

export default App