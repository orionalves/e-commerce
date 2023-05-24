import { WrapperTitle } from "./styles"
import Title from "../components/title"
import { RetangularButton, SquareNumber } from "../components/buttons"
import { screens } from "../App"
import Products from "../components/products"

const Home = ({ changePage, cartItens, handleCartItens }) => (
    <>
        <WrapperTitle>
            <Title title="Produtos" />
            <SquareNumber item={cartItens.length} />
        </WrapperTitle>
        <Products itens={cartItens} setItens={handleCartItens} />
        <RetangularButton
            item="Ir para o carrinho"
            position="fixed"
            bottom="6.3rem"
            right="1.5rem"
            onClick={() => changePage(screens.cart)}
        />
    </>
)

export default Home