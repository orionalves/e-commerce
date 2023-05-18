import { Container, Title } from "./styles"
import Arnia from "../../assets/images/logos/arnia.png"

const Header = () => (
    <Container>
        <img src={Arnia} alt="logo Arnia" />
        <Title>Loja Virtual</Title>
    </Container>
  )
  
export default Header