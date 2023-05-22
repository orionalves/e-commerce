import { RetangularButtons, SquareNumbers, StyledCheckbox, PlusMinusButtons } from "./styles"
import { useState, useEffect } from "react"

export const RetangularButton = ({item, ...rest }) => (
    <RetangularButtons { ...rest }>{item}</RetangularButtons>
)
export const PlusMinusButton = ({item, onClick}) => (
    <PlusMinusButtons onClick={onClick}>{item}</PlusMinusButtons>
)

export const SquareNumber = ({item}) => (
    <SquareNumbers>{item}</SquareNumbers>
)

export const Checkbox = ({ onClick }) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        onClick(isChecked)
      }, [isChecked])
  
    return (
        <StyledCheckbox 
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        />
    )
}