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
            <NavLink to="/about" activeStyle>
                About Me
            </NavLink>
            <NavLink to="/games" activeStyle>
                Mini Games
            </NavLink>
            <NavLink to="/projects" activeStyle>
                Projects
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