import { WrapperTitle } from "./styles"
import Title from "../components/title"
import { SquareNumber } from "../components/buttons"


const Checkout = () => {
    return (
        <>
            <WrapperTitle>
                <Title title="Produtos" />
                <SquareNumber item='6' />
            </WrapperTitle>
        </>
    )
}

export default Checkout