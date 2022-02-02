import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavRouteLink } from './NavbarElements';
import logo from '../../images/logo.png';
import { animateScroll  as scroll } from 'react-scroll';
import { HashedLink } from './NavbarElements';


const Navbar = ({isOpen, toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', changeNav)
  }, [] )

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    <img src={logo} width="196.56" height="63.84" />
                </NavLogo>
                <MobileIcon onClick={toggle} isOpen={isOpen}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                    <NavRouteLink to = "/" onClick={toggleHome}>
                      HOME
                    </NavRouteLink>
                  </NavItem>
                  <NavItem>
                    <HashedLink smooth to="/#nieuws" scroll={el => scrollWithOffset(el)}>NIEUWS</HashedLink>
                  </NavItem>
                  <NavItem>
                    <NavRouteLink to = "/mensen" >MENSEN</NavRouteLink>
                  </NavItem>
                  <NavItem>
                    <NavRouteLink to = "/standpunten" onClick={toggleHome}>STANDPUNTEN</NavRouteLink>
                  </NavItem>
                  <NavItem>
                    <NavRouteLink to = "/contact" onClick={toggleHome}>CONTACT</NavRouteLink>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to="/word-lid"> WORD LID </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;
