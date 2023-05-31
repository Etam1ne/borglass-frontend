import { useEffect, useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { LogoContainer, NavLinks, NavButton } from "../Layout/Navigation.style";
import { AdminNavigation, AdminNavContainer } from "./AdminNavigation.style";
import { Logo } from "../../images/Logo";
import { useAppSelector } from "../../hooks/reduxHooks";


export function AdminLayout(): JSX.Element {
    const navigate = useNavigate();

    const [openedNav, setOpenedNav] = useState<boolean>(false);
    const user = useAppSelector(state => state.user);

    useEffect(() => {
        if (user.email === undefined && !user.isAdmin) navigate("auth");
    })

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