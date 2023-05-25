import styled from "styled-components"
import { fonts } from "../../theme/constants"

export const WrapperImage = styled.div`
    display: flex;
    gap: 1rem;
`

export const Image = styled.img`
    height: 10rem;
    width: 8rem;
    border-radius: 9px;
`

export const ItensFinalCart = styled.div`
    margin: 10.3rem 1rem;
    font-family: ${fonts.poppins};
    font-size: 1.5rem;
    font-weight: 700;
    @media screen and (min-width: 600px){
        margin: 11.6rem 1rem;
    }
`