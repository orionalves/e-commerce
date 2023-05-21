import React from 'react'
import Layout from './pages/layout'
import Home from './pages/home'
import Cart from './pages/cart'
import { useState } from "react";

export const screens = {
  home: 0,
  cart: 1,
  checkout: 2
}

const App = () => { 
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
    <Layout page={<Home/>}/>
)}

export default App