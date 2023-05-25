import { Itens, Item, Image, ItemName, RightContent, WrapperPlusMinus, Paragraph } from "./styles"
import { PlusMinusButton } from "../buttons"
import { useEffect } from "react"

const CartItens = ({ cartItens, updateCart, quantity, setQuantity, amount, setAmount, handleQuantity}) => {
    useEffect(() => {
        const initialQuantity = cartItens.reduce((accumulator, product) => {
            accumulator[product.id] = quantity[product.id] > 0 ? quantity[product.id] : 1
            return accumulator
        }, {})
        
        const totalPrice = cartItens.reduce((total, product) => {
            quantity[product.id] = quantity[product.id] || 1
            return total + product.price * quantity[product.id]
          }, 0)

        setAmount(totalPrice)
        setQuantity(initialQuantity)

    }, [cartItens])

    const sumValue = (value, productId, newQuantity) => {
        setAmount(amount + value)
        handleQuantityChange(productId, newQuantity)
    }

    const subtractValue = (value, productId, newQuantity) => {
        setAmount(() => {
                if (quantity[productId] > 0) {
                return amount - value
            }
        })
        handleQuantityChange(productId, newQuantity)
    }

    const handleQuantityChange = (productId, newQuantity) => {
        setQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: newQuantity
        }))
    }

    return (
    <Itens>
        {cartItens.map((product) => {
            if (quantity[product.id] > 0) {
                return (
                    <Item key={product.id}>
                        <Image src={product.image} alt={product.title + ' image'} />
                        <RightContent>
                            <ItemName>{product.title}</ItemName>
                            <Paragraph>Valor: R$ {product.price}</Paragraph>
                            <Paragraph>Quantidade: {quantity[product.id]}</Paragraph>
                            <WrapperPlusMinus>
                                <PlusMinusButton item="-" onClick={() => subtractValue(product.price, product.id, quantity[product.id] - 1)} />
                                <PlusMinusButton item="+" onClick={() => sumValue(product.price, product.id, quantity[product.id] + 1)} />
                            </WrapperPlusMinus>
                        </RightContent>
                    </Item>
                );
            }
            return null;
        })}
        <Paragraph>Total: {amount}</Paragraph>
    </Itens>
)}
  
export default CartItens