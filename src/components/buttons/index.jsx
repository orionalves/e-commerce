import { SquareButtons, SquareNumbers, StyledCheckbox } from "./styles"
import { useState } from "react";

export const SquareButton = ({item, ...rest }) => (
    <SquareButtons { ...rest }>{item}</SquareButtons>
)

export const SquareNumber = ({item}) => (
    <SquareNumbers>{item}</SquareNumbers>
)

export const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    return (
        <StyledCheckbox 
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        />
    )
}