import { WrapperTitle, Products, LineBottom, Image, Product } from "./styles"
import Title from "../components/title"
import { SquareButton, SquareNumber, Checkbox } from "../components/buttons"
import { products } from "../assets/constants"


const Home = () => (
  <>
  <WrapperTitle>
    <Title title="Produtos"/>
    <SquareNumber item="2"/>
  </WrapperTitle>
  <Products>
    {products.map((product) => (
      <Product key={product.id}>
        <Image src={product.image} alt={product.title + ' image'}/>
        <LineBottom>
          <Checkbox />
          <p>Valor: R${product.price}</p>
        </LineBottom>
      </Product>
    ))}
  </Products>
  <SquareButton item="Ir para o carrinho" position="fixed" bottom="6.3rem" right="1.5rem" />
  </>
)

export default Home