
import { WrapperImage, ItensFinalCart, Image } from "./styles"

const CheckoutItens = ({ cartItens, quantity, amount }) => (
    <ItensFinalCart>
        <p>Produtos escolhidos:</p>
        <WrapperImage>
            {cartItens.map((product) => (
                <Image key={product.id} src={product.image} alt={product.title + ' image'} />
            ))}
        </WrapperImage>
        <p>Total produtos: {quantity}</p>
        <p>Total: {amount}</p>
    </ItensFinalCart>
)

export default CheckoutItens
