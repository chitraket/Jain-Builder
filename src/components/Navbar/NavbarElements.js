import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import {motion} from 'framer-motion';
import { PRIMARY, WHITE } from '../../styles/color';
import { Container } from '../../globalStyles';
export const NavLink  = styled(Link)`
    color:${WHITE};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height:100%;
    @media screen and (max-width: 1145px){
        padding: 0.5rem 0.2rem;
    }
    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        &:hover {
            color: ${PRIMARY};
            transition: all 0.3s ease;
        }
    }
`;

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0rem;
    z-index: 999;
    top: 0;
    position: fixed;
    width: 100%;
`;
export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    ${Container}
`;
export const NavLogo = styled(Link)`
    color: ${WHITE};
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;
export const NavIcon = styled.img`
    width: 90%;
    height: 90%;
    @media screen and (max-width:960px){
        width: 80%;
    height: 80%;
    }
`
export const MenuBars = styled(FaBars)`
    display: none;
    @media screen and (max-width:960px){
        display: block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 65%);
        font-size: 1.8rem;
        cursor: pointer;
        color:${WHITE};
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`;
export const NavItem = styled.li`
    //height: 80px;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom: 2px solid ${PRIMARY};
    }
    @media screen and (max-width: 960px) {
        display: none;
    }
`;
export const NavBtn = styled.div`
    display:flex;
    align-items: center;
    padding: 0rem 1rem;
`
export const Button = styled(motion.button)`
    height: 40px;
    width:120px;
    color: white;
    border-style:none;
    background-color: ${PRIMARY};
    color:white;
    @media screen and (max-width: 768px){
        display: none;
    }
`