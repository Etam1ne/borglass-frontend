import styled from "styled-components";

export const SectionWrapper = styled.section`
    min-height: 100vh;
    display: flex;

    &:first-child {
        margin-top: 60px;
        height: calc(100vh - 60px);
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
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

    @media screen and (max-width: 1000px) {
        width: 100%;
        min-height: 50vh;
    }
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

export const SectionList = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    margin: 1rem;
    gap: 1rem;

    li {
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
        border-radius: 1rem;
        padding: 1rem;
        list-style: none;
        background-color: ${props => props.theme.colors.primaryGreen};
        color: ${props => props.theme.colors.primaryLightblue};
    }
`