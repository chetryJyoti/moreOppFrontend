import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
// import {Link as LinkS} from 'react-scroll'
import { Link as LinkS } from "react-router-dom";


export const Nav = styled.nav`
    height:80px;
    /* background-color: #374BFF; */
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width:960px){
        transition:0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
    color: #374BFF;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    /* margin-left:14px; */
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon =styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }

`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style:none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width:768px) {
        display: none;
    }

`
export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkS)`
    color:#374BFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        border-bottom: 1px solid #374BFF;
    }

`
export const NavBtn = styled.nav`
    padding-left: 15px;
    display: flex;
    align-items: center;
    @media screen and (max-width:768px) {
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 10px;
    /* background-color:#4D9ACE; */
    background: #374BFF;
    color: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #009EFF;
        color:#fff;
    }
`