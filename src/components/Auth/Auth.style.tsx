import styled from "styled-components";

export const AuthMain = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: ${props => props.theme.colors.primaryLightblue};
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 15px;
    color: ${props => props.theme.colors.primaryGreen};
`