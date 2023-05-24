import styled from "styled-components"
import { colors, fonts } from "../../theme/constants"

export const Image = styled.img`
    height: 10rem;
    width: 8rem;
    border-radius: 9px;
`

export const Itens = styled.div`
    margin: 10.3rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (min-width: 600px){
        margin: 11.6rem 2rem;
    }
`

export const Item = styled.div`
    display: flex;
    gap: 0.3rem;
`

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`

export const ItemName = styled.h2`
    font-family: ${fonts.openSans};
    font-size: 1.25rem;
    text-transform: uppercase;
`

export const WrapperPlusMinus = styled.div`
    display: flex;
    gap: 0.8rem;
`

export const Paragraph = styled.p`
    color: #141212;
    font-family: ${fonts.poppins};
    font-size: 1rem;
    font-weight: 700;
`