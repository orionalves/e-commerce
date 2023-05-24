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

export const Checkbox = ({ onClick, checked }) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        setIsChecked(checked);
      }, [checked]);
    
      const handleCheckboxClick = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onClick(newChecked);
      };

    return (
        <StyledCheckbox
        checked={isChecked}
        onClick={handleCheckboxClick}
        />
    )
}