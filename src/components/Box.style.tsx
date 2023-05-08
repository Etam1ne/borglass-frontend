import styled from "styled-components";

export const Box = styled.div`
    background-color: ${props => props.theme.colors.primaryLightblue};
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 15px;
    color: ${props => props.theme.colors.primaryGreen};
`

export const VerticalFlexbox = styled(Box)`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const HorizontalFlexbox = styled(Box)`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 620px) {
        flex-direction: column !important;
        &:nth-child(1) {
            display: none;
        }
    }
`