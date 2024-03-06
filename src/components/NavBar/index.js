import React from 'react'
import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
            <h1>mygreybunny</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/AboutMe" activeStyle>
                About Me
            </NavLink>
            <NavLink to="/services" activeStyle>
                Mini Games
            </NavLink>
            <NavLink to="/contact-us" activeStyle>
                Personal Projects
            </NavLink>
            
        </NavMenu>
        {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
    </Nav>
    </>
  )
}

export default Navbar