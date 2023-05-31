import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navigation, NavContainer, LogoContainer, NavLinks, NavButton } from "./Navigation.style";
import { Logo } from "../../images/Logo";

export function Layout(): JSX.Element {

  const [openedNav, setOpenedNav] = useState<boolean>(false);

  return (
    <>
      <Navigation>
        <NavContainer>
          
          <Link to="/">
            <LogoContainer>
              <Logo width={40} height={40}/>
              <span>BORGLASS</span>
            </LogoContainer>
          </Link>

          <NavLinks 
          data-visible={openedNav}
          side="right"
          >
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="products">Продукция</Link>
            </li>
            <li>
              <Link to="contacts">Контакты</Link>
            </li>
          </NavLinks>

          <NavButton 
          onClick={() => setOpenedNav(!openedNav)} 
          data-visible={openedNav}
          />

        </NavContainer>
      </Navigation>
      
      <Outlet />
    </>
  )
}
