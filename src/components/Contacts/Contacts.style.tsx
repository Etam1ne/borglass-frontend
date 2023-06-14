import styled from "styled-components";

export const ContactsMain = styled.main`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContactsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primaryLightblue};
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
    color: ${props => props.theme.colors.primaryGreen};

    & ul {
        padding: 30px;
    }
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

export const Map = styled.iframe`
    height: 50vh;
    width: 50vw;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`