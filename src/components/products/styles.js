import styled from "styled-components"
import { fonts } from "../../theme/constants"

export const Image = styled.img`
    height: 10rem;
    width: 8rem;
    border-radius: 9px;
`

export const Games = styled.div`
    margin: 10.3rem 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 600px){
        margin: 11.6rem 1rem;
        gap: 1rem;
    }
`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    align-items: center;
`

export const LineBottom = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: ${fonts.poppins};
    font-weight: 700;
    font-size: 1rem;
    @media screen and (min-width: 600px){
        gap: 1rem;
    }
`