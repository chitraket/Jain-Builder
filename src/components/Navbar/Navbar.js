import React,{ useState,useEffect } from 'react'

import {motion} from 'framer-motion'
import { PRIMARY, WHITE } from '../../styles/color';
import { Nav ,NavLogo ,NavbarContainer,NavIcon,MenuBars,NavMenu,NavLink,NavBtn,NavItem} from './NavbarElements';
import { useLocation } from 'react-router-dom';
import Logo from '../../images/logo.png'
// import { SecondaryButton } from '../../globalStyles';

const Navbar = ({toggle,menuData}) => {
    const [shouldShowActions,setShouldShowActions]= useState(true)
    const [lastYPos, setLastYPos] = useState(0);
    const [homePage,setHomePage] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (window.location.pathname === "/") {
            setHomePage(true);
          } else {
            setHomePage(false)
          }
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrolling = yPos === 0;
            setShouldShowActions(isScrolling)
            setLastYPos(yPos)
        }
        window.addEventListener('scroll', handleScroll,false)


        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [lastYPos,location])
    return (
        <Nav as={motion.div}  animate={{backgroundColor:shouldShowActions ? 'transparent':PRIMARY}} >
               <NavbarContainer>
                <NavLogo to='/'><NavIcon src={Logo}/></NavLogo>
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item,index)=> (
                    <NavItem key={index}>
                        <NavLink to={item.link}>{item.title}</NavLink>
                    </NavItem>
                    ))}
                    {/* <NavItem>
                        <SecondaryButton primary>contact us</SecondaryButton>
                    </NavItem> */}
                </NavMenu>      
                </NavbarContainer>         
        </Nav>
    )
}




export default Navbar