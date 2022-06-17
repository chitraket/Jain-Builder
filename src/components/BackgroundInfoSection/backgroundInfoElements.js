import styled from "styled-components";
import InfoSectionImg from '../../images/bg-section.jpg'
import { WHITE } from "../../styles/color";
export const BgContainer = styled.div`
    width:100%;
    height:450px;
    background-image: url(${InfoSectionImg});
    background-attachment:fixed;
`;
export const BgTextWrapper = styled.div`
    height:450px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0 auto;
    width:750px;
    color:${WHITE};
    @media screen and (max-width: 768px) {
        width: 280px;
    }
`;
export const BgTitle = styled.h3`
    font-size:25px;
    line-height:50px;
    font-weight:600;
    letter-spacing: 0.5px;
`;