import styled from "styled-components";
import { NavContainer, Navigation } from "../Layout/Navigation.style";

export const AdminNavigation = styled(Navigation)`
    width: fit-content;
    position: sticky;
    height: 95vh;
    padding: 2.5vh;
`

export const AdminNavContainer = styled(NavContainer)`
    flex-direction: column;
    justify-content: unset;
    gap: 40px;
`

export const AdminPageWrapper = styled.div`
    display: flex;

    main {
        margin: 2.5vh;
        width: 100%;
    }
`