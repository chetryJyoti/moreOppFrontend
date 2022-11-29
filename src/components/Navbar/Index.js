import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
function Index({toggle}) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            {/* <img style={{width:"200px",height:"80px"}} src={logo} alt="logo"></img> */}
            More opportunities
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/About">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Hackathons">Hackathons</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Intenships">Intenships</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Scholarships">Scholarships</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/signUp">Signup</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Index;
