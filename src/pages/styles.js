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