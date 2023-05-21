import styled from "styled-components"
import { fonts, colors } from "../../theme/constants"

export const SquareButtons = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    font-family: ${fonts.poppins};
    color: ${colors.background};
    background-color: ${colors.primary};
    font-weight: 800;
    font-size: 1.5rem;
    padding: 0.3rem 1rem;
    border: none;
    border-radius: 9px;
    position: ${props => props.position};
    bottom: ${props => props.bottom};
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    @media screen and (min-width: 600px){
        font-size: 2rem;
    }
`

export const SquareNumbers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    font-family: ${fonts.poppins};
    color: ${colors.background};
    background-color: ${colors.primary};
    font-weight: 400;
    font-size: 2rem;
    padding: 0rem 1rem;
    border-radius: 9px;
    `

export const StyledCheckbox = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    border: 1px solid ${colors.primary};
    border-radius: 9px;
    background-color: ${props => props.checked ? colors.primary : colors.background};
`