import React from 'react'
import styled from "styled-components";
import { PRIMARY, WHITE } from '../styles/color';
const RoundButton = ({ text, blue = false ,...otherProps}) => {
  return (
    <Div>
    <button className={`${blue ? "blue" : ""}`} {...otherProps} >{text}</button>
  </Div>
  )
}
const Div = styled.div`
  button {
    border-radius: 4rem;
    padding: 0.8rem 2rem;
    border: none;
    color: ${WHITE};
    font-size: 1.1rem;
    cursor: pointer;
    :not(.blue) {
      background-color: transparent;
      border: 1px solid ${WHITE};
    }
  }
  .blue {
    background-color: ${PRIMARY};
  }
`;

export default RoundButton