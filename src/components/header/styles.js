import styled from "styled-components"
import { colors, fonts } from "../../theme/constants"

export const Container = styled.header`
    height: 5.3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    background-color: ${colors.primary};
    font-family: ${fonts.poppins};
    color: ${colors.background};
    position: fixed;
    top: 0;
    left: 0;
    @media screen and (min-width: 600px){
        padding: 0rem 1.5rem;
    }
`

export const Title = styled.p`
    font-weight: 400;
    font-size: 2rem;
`