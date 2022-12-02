import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariant = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    margin: 9px;
    border: 0;
    cursor: pointer;


    background-color: ${props => props.theme.primary};
    /* ${props => {
        return `background-color: ${buttonVariant[props.variant]};`
    }} */
`