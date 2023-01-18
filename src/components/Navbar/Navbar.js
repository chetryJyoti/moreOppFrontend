import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getCurrentUserName} from "../../auth";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './styles.css'
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

function Navbar({ toggle }) {
  //for navigating to user profile
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/userProfile"; 
    navigate(path);
  }

  const [user, setUser] = useState();
  useEffect(() => {
    setTimeout(() => {
      const userFound = getCurrentUserName();
      if (userFound != null) {
        setUser(userFound);
      }
    }, 100);
  }, []);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">More opportunities</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/hackathon">Hackathons</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/internship">Intenships</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/scholarship">Scholarships</NavLinks>
            </NavItem>

            {user != null ? (
            // <NavBtn>
            //   <NavBtnLink to="/userProfile">{user}</NavBtnLink>
            // </NavBtn>
            <div className="user_profile"
            onClick={routeChange}
              >
                <AccountCircleRoundedIcon/>
              {user}
            </div>
            ) : (
              <NavBtn>
                <NavBtnLink to="/signUp">Signup</NavBtnLink>
              </NavBtn>
            )}

            {/* <NavBtn>
              <NavBtnLink to="/signUp">Signup</NavBtnLink>
            </NavBtn>  */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
