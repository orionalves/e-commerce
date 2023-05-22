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

// export const screens = {
//     home: <Home/>,
//     cart: <Cart/>,
    // checkout: <Checkout/>
// }

const App = () => { 
    // const [currentPage, setCurrentPage] = useState(screens.home)
    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    // }
    return(
    <Layout page={<Cart/>}/>
)}

export default App