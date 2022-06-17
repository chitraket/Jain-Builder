import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {  PRIMARY, SECONDARY, WHITE } from "./styles/color";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    html, body {
        overflow-x:hidden;

    }
    /* ::-webkit-scrollbar {
        width: 0.6rem;
        background-color: #14213d;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${PRIMARY};
        border-radius: 20px;
    } */
`;
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;
export const SecondaryButton = styled(Link)`
    border-radius: 4px;
    text-decoration: none;
    background: ${({primary})=> (primary ? PRIMARY : SECONDARY)};
    white-space: nowrap;
    padding: ${({big})=> (big ? '12px 64px' : '10px 20px')};
    color:${WHITE};
    font-size: ${({fontBg})=> (fontBg ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
        transition: all 0.3s ease-out;
        color: ${({primary})=> (primary ? PRIMARY : SECONDARY)};
        background: transparent;
        border: 1.5px solid ${({primary})=> (primary ? PRIMARY : SECONDARY)};;
    }

`;
export default GlobalStyle