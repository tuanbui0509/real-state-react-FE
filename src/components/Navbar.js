import React from 'react';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { MenuData } from '../data/MenuData';
import { Button } from '../components/Button';
// import {FaBars} from 'react-icons/fa'
import bars from '../images/bars.svg'

const Nav = styled.nav`
    height: 60px;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: fixed;
    z-index: 100;
    width: 100%;
    display:flex;
`
const NavLink = css`
    color: #fff;
    display:flex;
    align-items: center;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;
    text-decoration: none;
`
const Logo = styled(Link)`
    ${NavLink}
    color: #fff;
    font-style: italic;
`


// const MenuBars = styled(FaBars)`
//     display:none;
//     @media screen and (max-width: 768px){
//         display: block;
//     }
// `

const MenuBars = styled.i`
    display:none;
    @media screen and (max-width: 768px){
        display: block;
        background-image:url(${bars});
        background-size:contain;
        height: 40px;
        width:40px;
        cursor: pointer;
        position: absolute;
        bottom: -15px;
        right: 0;
        transform: translate(-50px,-25px);
    }
`
const NavMenu = styled.i`
    display:flex;
    align-items: center;
    margin-right: -48px;
    @media screen and (max-width: 768px){
        display: none;
    }
`
const NavMenuLinks = styled(Link)`
    ${NavLink}
`

const NavBtn = styled.div`
    display:flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px){
        display: none;
    }
`
const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to='/'>ELIXR</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {MenuData.map((item, index) => {
                    return (<NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>)
                })}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>
                    Contact us
                </Button>
            </NavBtn>
        </Nav>
    );
}

export default Navbar;