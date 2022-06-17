import styled from 'styled-components';
import { BLACK, GRAY_1, WHITE, WHITE_BG } from '../../styles/color';
import { motion } from "framer-motion";
export const CurrentProjectContainer = styled.div`
    padding:50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:${WHITE};
    
`;
export const CurrentProjectWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns:${({length})=> 
    length === 1 ? '1fr' :
    length === 2 ? 
    '1fr 1fr'
     : '1fr 1fr 1fr'
    };
    align-items: center;
    grid-gap:16px;
    padding: 0 50px;
    @media screen and (max-width: 1000px) {
        grid-template-columns:${({length})=> length > 1 ? '1fr 1fr' : '1fr'} ;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const CurrentProjectCard = styled(motion.div)`
    background:${WHITE};
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    border-radius:10px;
    max-height:340px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition:all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }
`;

export const CurrentProjectsCardImage = styled.img`
    height:200px;
    width:100%;
    margin-bottom:10px;
`;

export const CurrentProjectTitle = styled.h1`
    font-size: 2.5rem;
    color:${BLACK};
    margin-bottom: 64px;
    
    @media scrren and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const CurrentProjectCardTitle = styled.h2`
    font-size:1rem;
`;

export const CurrentProjectCardDescription = styled.p`
    font-size:10PX;
    text-align:center;
    margin:15px;
    color:${GRAY_1};
`