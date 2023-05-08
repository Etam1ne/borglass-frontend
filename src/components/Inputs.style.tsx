import styled from "styled-components";

export const TextInput = styled.input.attrs({
    type: "text"
})`
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