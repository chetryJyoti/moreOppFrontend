import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
  SidebtnWrap,
  SidebarLink
} from "./SidebarElement";
function Index({isOpen,toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/hackathon">Hackathons</SidebarLink>
          <SidebarLink to="/internship">Internships</SidebarLink>
          <SidebarLink to="/scholarship">Scholarships</SidebarLink>
          <SidebarLink to="/signUp">SignUp</SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to="/login">Login</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Index;
