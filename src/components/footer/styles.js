import styled from "styled-components"
import { colors, fonts } from "../../theme/constants"

export const Container = styled.footer`
    height: 5.3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0 0.5rem;
    border: 4px solid ${colors.primary};
    font-family: ${fonts.poppins};
    color: #0A0909;
    position: fixed;
    bottom: 0;
    left: 0;
    @media screen and (min-width: 600px){
        gap: 1rem;
        padding: 0 1rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
`
    
export const Title = styled.p`
    font-weight: 600;
    font-size: 0.75rem;
    white-space: nowrap;
`

export const Logo = styled.img`
    min-width: 3rem;
`