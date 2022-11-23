import React from 'react'
import { menuData } from '../../data/MenuData'
import { Button } from '../Button/Button'
import { ScrollTop } from '../ScrollTop'
import { DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownMenu, DropdownLink, BtnWrap } from './DropdownElements'


const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon onClick={toggle}/>
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {menuData.map((item, index) => (
                    <DropdownLink to={item.link} key={index} onClick={ScrollTop}>
                        {item.title}
                    </DropdownLink>
                ))}
            </DropdownMenu>
            <BtnWrap>
                <Button primary='true' round='true' big='true' to='/contacts'>
                Contact Us
                </Button>
            </BtnWrap>
        </DropdownWrapper>
        </DropdownContainer>
  )
}

export default Dropdown