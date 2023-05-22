import { WrapperTitle, Itens, Item, Image, ItemName, RightContent, WrapperPlusMinus } from "./styles"
import Title from "../../components/title"
import { RetangularButton, SquareNumber, PlusMinusButton } from "../../components/buttons"
import { products } from "../../assets/constants"
import { useState, useEffect } from "react"

const Cart = () => {
    // const [sum, setSum] = useState(products.price.reduce((acumulator, newValue) => acumulator + newValue, 0))
    const [amount, setAmount] = useState(products.reduce((accumulator, product) => accumulator + product.price, 0))
    const [quantity, setQuantity] = useState({})
    useEffect(() => {
        const initialQuantity = products.reduce((acc, product) => {
          acc[product.id] = 1;
          return acc;
        }, {});
      
        setQuantity(initialQuantity);
    }, [products]);
      
    const handleQuantityChange = (productId, newQuantity) => {
        setQuantity((prevQuantity) => ({
          ...prevQuantity,
          [productId]: newQuantity
        }));
      };
    return (
    <>
    <WrapperTitle>
        <Title title="Carrinho" />
        
        <SquareNumber item="6" />
    </WrapperTitle>
        <Itens>
            {products.map((product) => (
                <Item key={product.id}>
                    <Image src={product.image} alt={product.title + ' image'} />
                    <RightContent>
                        <ItemName>{product.title}</ItemName>
                        <p>Valor: R$ {product.price}</p>
                        <p>Quantidade: {quantity[product.id]}</p>
                        <WrapperPlusMinus>
                            <PlusMinusButton item="-" onClick={() => handleQuantityChange(product.id, (quantity[product.id]) - 1)} />
                            <PlusMinusButton item="+" onClick={() => handleQuantityChange(product.id, (quantity[product.id]) + 1)} />
                        </WrapperPlusMinus>
                    </RightContent>
                </Item>
            ))}
        </Itens>
    {/* <p>Total: {sum}</p> */}
    </>
)}

export default Cart