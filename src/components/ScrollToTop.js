import React ,{useState} from 'react'
import styled from 'styled-components'
import { PRIMARY, WHITE } from '../styles/color'
import {AiOutlineArrowUp} from 'react-icons/ai';
const ScrollToTop = () => {
    const [scrollState,setScrollState] = useState(false)
    const toTop = () => {
        window.scrollTo({top:0})
    }
    window.addEventListener("scroll",()=> {
         window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    });
  return (
    <ToTop scrollState={scrollState} onClick={toTop}>
        <AiOutlineArrowUp color={WHITE}/>
    </ToTop>
  )
}

export default ScrollToTop

const ToTop = styled.div`
    display: ${({scrollState})=> (scrollState ? "block": "none")};
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    z-index: 10;
    cursor: pointer;
    img {
        height: 1.5rem;
    }
    border-radius: 2rem;
    background-color: ${PRIMARY};
    padding: 1rem;
`;