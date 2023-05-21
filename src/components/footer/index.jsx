import Logos from '../../assets/images/logos'
import { Container, Content, Title, Logo } from "./styles"

const { boleto, hipercard, mastercard, visa} = Logos

const Footer = () => (
    <Container>
        <Content>
            <Title>Meios de pagamento: </Title>
            <Logo src={visa} alt="Visa"/>
        </Content>
        <Logo src={mastercard} alt="Mastercard"/>
        <Logo src={boleto} alt="Boleto"/>
        <Logo src={hipercard} alt="Hipercard"/>
    </Container>
)

export default Footer