import styled from "styled-components";

interface InputProps {
    type: string;
}

export const TextInput = styled.input.attrs<InputProps>(props => ({
    type: props.type || "text"
}))`
    padding: 5px;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.primaryGreen};
    border-radius: 5px;
    color: ${props => props.theme.colors.primaryDarkgreen};
    font-size: 16px;
    line-height: 18px;

    &:focus {
        outline: 1px solid ${props => props.theme.colors.primaryGreen};
    }
`

export const ButtonInput = styled.input.attrs<InputProps>(props => ({
    type: props.type || "submit"
}))`
    all: unset;
    background-color: #fff;
    border: 1px solid ${props => props.theme.colors.primaryGreen};
    border-radius: 5px;
    padding: 5px;
    color: ${props => props.theme.colors.primaryDarkgreen};
    text-align: center;

    &:hover {
        color: #fff;
        background-color: ${props => props.theme.colors.primaryGreen};
    }
`