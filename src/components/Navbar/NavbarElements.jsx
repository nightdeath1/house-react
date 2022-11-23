import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {BiBuildingHouse} from 'react-icons/bi'

export const Nav = styled.nav`
   height: 60px;
   display: flex;
   justify-content: space-between;
   padding: 1rem 2rem;
   z-index: 100;
   position: fixed;
   width: 100%;
    background: rgba(167, 89, 1, 0.75);
   &.active {
    background: rgba(167, 89, 1, 0.75);
   }
`
export const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`
export const Logo = styled(Link)`
${NavLink}
font-style: italic;
`

export const MenuBars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    height: 25px;
    width: 25px;
    color: #fff;


}
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavMenuLinks = styled(Link)`
${NavLink}
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const IconLogo = styled(BiBuildingHouse)`
margin-right: 0.5rem;
font-size: 2rem;
`