import { useState } from 'react'
import Header from '../components/header'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <Header/>
  )
}

export default Home
