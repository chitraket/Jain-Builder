import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import { BLACK, PRIMARY, WHITE } from '../styles/color'


const Dropdown = ({isOpen,toggle,menuData}) => {
    const [hover,setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu> 
                    {menuData.map((item,index)=> (
                        <DropdownLink to={item.link} key={index}>{item.title}</DropdownLink>
                    ))}
                </DropdownMenu>
                {/* <BtnWrap>
                    <Button primary='true' onMouseEnter={onHover} onMouseLeave={onHover} round='true' big='true' to='/contact'>
                        Contact Us
                    </Button>
                </BtnWrap> */}
            </DropdownWrapper>
        </DropdownContainer>
    )
}

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${PRIMARY};
    display: grid;
    align-items: center;
    top:0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '-100%')};
    top: ${({isOpen}) => (isOpen ? '1' : '-100%')};
`


const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon = styled(FaTimes)`
    color: ${WHITE};
`
const DropdownWrapper = styled.div`
`
const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;
    margin-bottom: 4rem;
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
`
const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color:${WHITE};
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color:${WHITE};
    cursor: pointer;
    transition: 0.2 ease-in-out;
    
    &:hover{
        color:${BLACK};
    }
`
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export default Dropdown