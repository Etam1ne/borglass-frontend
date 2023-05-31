import styled from "styled-components";

export const SectionWrapper = styled.section`
    height: 100vh;
    display: flex;

    &:first-child {
        margin-top: 60px;
        height: calc(100vh - 60px);
    }
`

export const SectionData = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primaryLightblue};
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
    color: ${props => props.theme.colors.primaryGreen};
`

export const SectionText = styled.p`
    margin: 30px;
    text-align: center;

`

interface SectionImageProps {
    src: string;
}

export const SectionImage = styled.div<SectionImageProps>`
    flex: 1;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`