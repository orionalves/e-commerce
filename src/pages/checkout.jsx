import { WrapperTitle } from "./styles"
import Title from "../components/title"
import { RetangularButton } from "../components/buttons"
import { screens } from "../App"
import CheckoutItens from "../components/checkout-itens"

const Checkout = ({finish, cartItens, amount, quantity, eraseData}) => {
    const sum = Object.values(quantity).reduce((accumulator, value) => accumulator + value, 0)
    return (
        <>
            <WrapperTitle>
                <Title title="Checkout" />
            </WrapperTitle>
            <CheckoutItens cartItens={cartItens} amount={amount} quantity={sum}/>
            <RetangularButton
                    item="Confirmar Compra"
                    position="fixed"
                    bottom="6.3rem"
                    right="1.5rem"
                    onClick={() => finish(screens.home)}
            />
        </>
    )
}


export default Checkout