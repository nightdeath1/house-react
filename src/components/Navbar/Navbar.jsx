import React, {useState, useEffect} from 'react'
import { menuData } from '../../data/MenuData'
import { Button } from '../Button/Button'
import { ScrollTop } from '../ScrollTop'
import {Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn, IconLogo} from './NavbarElements'


const Navbar = ({toggle}) => {


  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <Nav className={color? 'active' : 'null'}>
        <Logo to='/' onClick={ScrollTop}> <IconLogo />JACKESTATE</Logo>
    <MenuBars onClick={toggle}/>
    <NavMenu>
    {menuData.map((item, index) => (
        <NavMenuLinks to={item.link} key={index} onClick={ScrollTop}>
            {item.title}
        </NavMenuLinks>

    ))}
    </NavMenu>
    <NavBtn>
      <Button to='/contacts' primary='true'>
        Contact Us
      </Button>
    </NavBtn>
    </Nav>
  )
}

export default Navbar