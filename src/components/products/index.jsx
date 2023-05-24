import { Games, LineBottom, Image, Product } from "./styles"
import { Checkbox } from "../buttons"
import { products } from "../../assets/constants"

const Products = ({ itens, setItens }) => (
    <Games>
        {products.map((product) => (
            <Product key={product.id}>
                <Image src={product.image} alt={product.title + ' image'} />
                <LineBottom>
                    <Checkbox checked={itens.includes(product)}
                        onClick={(checked) => setItens( checked ? [...itens, product] : itens.filter((object) => object !== product) )}
                    />
                    <p>Valor: R${product.price}</p>
                </LineBottom>
            </Product>
        ))}
    </Games>
)

export default Products;
