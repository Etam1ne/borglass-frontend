import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LogoContainer, NavContainer, NavLinks, NavButton } from "../Layout/Navigation.style";
import { AdminNavigation, AdminNavContainer } from "./AdminNavigation.style";
import { Logo } from "../../images/Logo";

export function AdminLayout(): JSX.Element {

    const [openedNav, setOpenedNav] = useState<boolean>(false);

    return (
        <>
            <AdminNavigation>
                <AdminNavContainer>
                    <Link to="/">
                        <LogoContainer>
                        <Logo width={40} height={40}/>
                        <span>BORGLASS</span>
                        </LogoContainer>
                    </Link>

                    <NavLinks 
                    data-visible={openedNav} 
                    direction="column" 
                    side="left"
                    >
                        <li>
                        <Link to="/">Главная</Link>
                        </li>
                        <li>
                        <Link to="products">Продукция</Link>
                        </li>
                        <li>
                        <Link to="info">Производство</Link>
                        </li>
                        <li>
                        <Link to="contacts">Контакты</Link>
                        </li>
                    </NavLinks>

                    <NavButton 
                    onClick={() => setOpenedNav(!openedNav)} 
                    data-visible={openedNav}
                    />
                </AdminNavContainer>
            </AdminNavigation>

            <Outlet />
        </>
    );
}