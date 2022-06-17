import React from 'react'
import styled from 'styled-components'
import {FaYoutube, FaInstagram, FaFacebook,FaLinkedin, FaArrowRight} from 'react-icons/fa'

import { IconContext } from 'react-icons/lib'
import { BLACK, PRIMARY, WHITE } from '../styles/color'
import Logo from '../images/logo.png'
import { menuData } from '../data/MenuData'
const Footer = () => {
    return (
        <Section>
            <Container>
                <Row>
                    <ColumnOne>
                    <img src={Logo}/>
                    <h5>&#169; Jain Builders. All rights reserved Design & Developed by Chitraket Savani</h5>
                    </ColumnOne>
                </Row>
                <Row>
                    <ColumnTwo>
                        <h4>Contact Details</h4>
                        <ul>
                            <li><h5>Email</h5></li>
                            <li><a href='/'>info@jainbuilder.com</a></li>
                            <li><h5>Phone</h5></li>
                            <li><a href='/'>+91 7381085104</a></li>
                        </ul>
                    </ColumnTwo>
                </Row>
                <Row>

                    <ColumnTwo>
                        <h4>Offices</h4>
                        <ul>
                            <li><a href='/'>Paras Plaza, Tinkonia Bagicha Cuttack-753001.</a></li>
                            <li><a href='/'>Astnami Apartment, Flat No. – 11, Ground Floor N.H. – 215, Jajpur, Keonjhar Road</a></li>
                        </ul>
                    </ColumnTwo>
                </Row>
                <ColumnThree>
                <Row>
                    <ul>
                        <IconContext.Provider value={{color:WHITE, size: '30px'}}>                            
                            <li><FaYoutube/></li>
                            <li><FaFacebook/></li>
                            <li><FaInstagram/></li>
                            <li><FaLinkedin/></li>
                        </IconContext.Provider>
                        <li></li>
                    </ul>
                    
                </Row>   
                </ColumnThree>
            </Container> 
        </Section>
    )
}


const Section = styled.section`
    width:100%;
    height:100%;
`
const Container = styled.div`
    padding: 0rem 2rem;
    
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: 300px 100px;
    background-color: ${BLACK};
    margin-top:0;
    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 400px;
    }
`
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    ul{
        list-style: none;
    }
    ul li:not(:last-child){
        margin-bottom: 15px;
        
    }
`


const ColumnOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;;
    float: inline-start;
    padding: 1rem 0rem;
    h1{
        margin-bottom: 1rem;
        color:${WHITE};
        font-size: clamp(2rem, 4rem, 7rem);
    }
    a{
        text-decoration: none;
    }
    h5 {
        margin-top: 15px;
        color: ${WHITE};
        font-size: 12px;
        font-weight: 500;
    }
    @media screen and  (max-width:600px) {
        max-width: 100%;
        img {
            height: 20%;
            width: 100%;
        }
    }
`
const ColumnTwo = styled.div`
    padding: 1rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h4{
        text-transform: capitalize;
        margin-bottom: 15px;
        font-weight: bold;
        color: ${WHITE};
    }
    h5 {
        text-transform: capitalize;
        color:${WHITE};
        font-weight: bold;
    }
    a{
        font-size: 15px;
        text-decoration: none;
        color: ${WHITE};
    }
`
const ColumnThree = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0rem;
    ul li{
        display: inline;
        height: 20px;
        margin-right:20px;
    }
`
export default Footer