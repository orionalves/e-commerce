import { Itens, Item, Image, ItemName, RightContent, WrapperPlusMinus, Paragraph } from "./styles"
import { PlusMinusButton } from "../buttons"
import { products } from "../../assets/constants"
import { useState, useEffect } from "react"

const CartItens = ({ cartItens, updateCart }) => {
    const [amount, setAmount] = useState(cartItens.reduce((accumulator, product) => accumulator + product.price, 0))
    const [quantity, setQuantity] = useState({})
    useEffect(() => {
        const initialQuantity = products.reduce((acc, product) => {
            acc[product.id] = 1;
            return acc;
        }, {});

        setQuantity(initialQuantity);
    }, [products]);

    const sumValue = (value, productId, newQuantity) => {
        setAmount(amount + value)
        handleQuantityChange(productId, newQuantity)
    }

    const subtractValue = (value, productId, newQuantity) => {
        setAmount(() => {
                if (value > 0) {
                return amount - value
            }
        })
        setQuantity((quantity) => ({
            ...quantity,
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