import { WrapperTitle, Products, LineBottom, Image, Product } from "./styles"
import Title from "../components/title"
import { RetangularButton, SquareNumber, Checkbox } from "../components/buttons"
import { products } from "../assets/constants"
import { useState } from "react"

const Home = () => {
    const [cartItens, setCartItens] = useState([])
    const [pageTitle, setPageTitle] = useState("Produtos")
    
    return (
        <>
            <WrapperTitle>
                <Title title={pageTitle} />
                <SquareNumber item={cartItens.length} />
            </WrapperTitle>
            <Products>
                {products.map((product) => (
                    <Product key={product.id}>
                        <Image src={product.image} alt={product.title + ' image'} />
                        <LineBottom>
                            <Checkbox onClick={(checked) => {
                                setCartItens(checked ? [...cartItens, product.id] : cartItens.filter((id) => id !== product.id))}} />
                            <p>Valor: R${product.price}</p>
                        </LineBottom>
                    </Product>
                ))}
            </Products>
            <RetangularButton 
                item="Ir para o carrinho" 
                position="fixed" 
                bottom="6.3rem" 
                right="1.5rem" 
            />
        </>
    )
}

export default Home

// export const Checkbox = ({ onClick }) => {
//     const [isChecked, setIsChecked] = useState(false)

//     useEffect(() => {
//         onClick(isChecked)
//       }, [isChecked])
  
//     return (
//         <StyledCheckbox 
//         checked={isChecked}
//         onClick={() => setIsChecked(!isChecked)}
//         />
//     )
// }