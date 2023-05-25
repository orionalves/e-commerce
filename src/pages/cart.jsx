import { WrapperTitle } from "./cart/styles"
import Title from "../components/title"
import { RetangularButton, SquareNumber } from "../components/buttons"
import { screens } from "../App"
import CartItens from "../components/cart-Itens"

const Cart = ({ goToHome, goToCheckout, cartItens, handleCartItens, quantity, setQuantity, amount, setAmount, handleQuantity}) => {
    return (
        <>
            <WrapperTitle>
                <Title title="Carrinho" />
                <SquareNumber item={cartItens.length} />
            </WrapperTitle>
            <CartItens 
                cartItens={cartItens} 
                updateCart={handleCartItens} 
                quantity={quantity} 
                setQuantity={setQuantity}
                amount={amount}
                setAmount={setAmount}
                handleQuantity={handleQuantity}/>
                <RetangularButton
                    item="Voltar"
                    position="fixed"
                    bottom="6.3rem"
                    left="1.5rem"
                    onClick={() => goToHome(screens.home)}
                />
                <RetangularButton
                    item="Checkout"
                    position="fixed"
                    bottom="6.3rem"
                    right="1.5rem"
                    onClick={() => goToCheckout(screens.checkout)}
                />
        </>
    )
}

export default Cart