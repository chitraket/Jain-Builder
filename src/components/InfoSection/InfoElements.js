import styled from 'styled-components';
import { BLACK, GRAY_1, PRIMARY, WHITE } from '../../styles/color';
import { motion } from 'framer-motion'
export const InfoContainer = styled.div`
    color: ${WHITE};
    background:${({lightBg})=> (lightBg ? WHITE : BLACK)};
`;
export const InfoWrapper = styled(motion.div)`
    display:grid;
    z-index:1;
    width:100%;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
    padding:50px;
    justify-content:center;
`;
export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns:minmax(auto,1fr);
    align-items:center;
    grid-template-areas:${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width:768px){
        grid-template-areas:${({imgStart})=> (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col1;
`;

export const Column2 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col2;
`;

export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
`;

export const TopLine = styled.p`
    color:${PRIMARY};
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom:16px;
`;

export const Heading = styled.h1`
    margin-bottom:24px;
    font-size: ${({isSmall})=> (isSmall ? '38px': '48px')};
    line-height:1.1;
    font-weight:600;
    color:${({lightText}) => (lightText ? BLACK: WHITE)};

    @media screen and (max-width:480px){
        font-size:${({isSmall})=> (isSmall ? '25px': '32px')};
    }
`;

export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:35px;
    font-size:14px;
    line-height:24px;
    color:${({lightTextDesc})=> (lightTextDesc ? GRAY_1 : WHITE)};
`;

export const BtnWrap = styled.div`
    display:flex;
    justify-content:flex-start;
`;

export const ImgWrap = styled.div`
    max-width:${({isSmall})=> (isSmall ? '300px': '555px')};
    height:100%;
    ${({isSmall})=> (isSmall && 'display: block; margin: 0 auto; @media screen and (max-width:768px){margin:0}')}

`;
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width:768px){
        width: 90%;
        height: 90%;
    }
    margin:0 0 10px 0;
    padding-right: 0;
`