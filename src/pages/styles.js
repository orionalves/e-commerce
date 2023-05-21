import styled from "styled-components"
import { colors, fonts } from "../theme/constants"

export const WrapperTitle = styled.div`
    position: fixed;
    top: 5.3rem;
    background-color: ${colors.background};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    @media screen and (min-width: 600px){
        padding: 1rem 1.5rem;
    }
`

export const Image = styled.img`
    height: 10rem;
    width: 8rem;
    border-radius: 9px;
`

export const Products = styled.div`
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