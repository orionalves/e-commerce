import styled from "styled-components"
import { colors, fonts } from "../../theme/constants"

export const Container = styled.header`
    height: 5.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    background-color: ${colors.primary};
    font-family: ${fonts.poppins};
    color: ${colors.background};
    position: sticky;
    top: 0;
    left: 0;
`

export const Title = styled.p`
    font-weight: 400;
    font-size: 2rem;
`