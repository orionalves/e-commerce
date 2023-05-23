import { WrapperTitle, Itens, Item, Image, ItemName, RightContent, WrapperPlusMinus, Paragraph } from "./styles"
import Title from "../../components/title"
import { RetangularButton, SquareNumber, PlusMinusButton } from "../../components/buttons"
import { products } from "../../assets/constants"
import { useState, useEffect } from "react"

const Cart = ({home, checkout}) => {
    const [amount, setAmount] = useState(products.reduce((accumulator, product) => accumulator + product.price, 0))
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
            if (amount > 0) {
            return  amount - value}})
        handleQuantityChange(productId, newQuantity)
    }

    const handleQuantityChange = (productId, newQuantity) => {
        setQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: newQuantity
        }))
    }
    return (
        <>
            <WrapperTitle>
                <Title title="Carrinho" />

                <SquareNumber item={products.filter((product) => quantity[product.id] > 0).length} />
            </WrapperTitle>
            <Itens>
                {products.map((product) => {
                if (quantity[product.id] > 0) {
                    return (
                    <Item key={product.id}>
                        <Image src={product.image} alt={product.title + ' image'} />
                        <RightContent>
                            <ItemName>{product.title}</ItemName>
                            <Paragraph>Valor: R$ {product.price}</Paragraph>
                            <Paragraph>Quantidade: {quantity[product.id]}</Paragraph>
                            <WrapperPlusMinus>
                                <PlusMinusButton item="-" onClick={() => subtractValue(product.price, product.id, (quantity[product.id]) - 1)} />
                                <PlusMinusButton
                                    item="+"
                                    onClick={() => sumValue(product.price, product.id, (quantity[product.id]) + 1)} />
                            </WrapperPlusMinus>
                        </RightContent>
                    </Item>
                )}
                return null
                })}
                <Paragraph>Total: {amount.toFixed(2)}</Paragraph>
                <RetangularButton 
                item="Voltar" 
                position="fixed" 
                bottom="6.3rem" 
                left="1.5rem"
                onClick={home}
                />
                <RetangularButton 
                item="Checkout" 
                position="fixed" 
                bottom="6.3rem" 
                right="1.5rem"
                onClick={checkout}
                />
            </Itens>
        </>
    )
}

export default Cart