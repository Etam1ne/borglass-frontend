import styled from "styled-components";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";

export const Navigation = styled.nav`
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: ${props => props.theme.colors.primaryLightblue};
    color: ${props => props.theme.colors.primaryGreen};
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
    font-size: 18px;
`

export const NavContainer = styled.div`
    height: 100%;
    padding: 0 2.5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    @media screen and (max-width: 620px) {
        && span {
            display: none;
        }
    }
`

export const NavLinks = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    gap: 1rem;

    @media screen and (max-width: 620px) {
        position: fixed;
        inset: 0 0 0 50%;
        padding: min(30vh, 10rem) 2rem;
        flex-direction: column;
        background-color: ${props => props.theme.colors.primaryLightblue};
        transition: transform 0.5s ;
        
        &[data-visible=true] {
            transform: translateX(0%);
        }
        &[data-visible=false] {
            transform: translateX(100%);
        }
    }
`

export const NavButton = styled.button`
    all: unset;
    height: 40px;
    width: 40px;
    z-index: 99;
    background-size: contain;
    background-position: center;
    transition: background-image 0.5s;

    &[data-visible=true] {
        background-image: url(${close});
    }
    &[data-visible=false] {
        background-image: url(${menu});
    }

    @media screen and (min-width: 620px) {
        display: none;
    }
`