import styled from "styled-components";
import { NavContainer, Navigation } from "../Layout/Navigation.style";

export const AdminNavigation = styled(Navigation)`
    height: 100%;
    width: fit-content;
`

export const AdminNavContainer = styled(NavContainer)`
    flex-direction: column;
    justify-content: unset;
    gap: 40px;
    padding: 2.5vh 2.5vw;
`