import styled from 'styled-components';
import { WHITE } from '../../styles/color';
export const FeatureContainerWrapper = styled.div`
    background: linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${props => props.bgImage});
    height: 100vh;
    max-height: 400px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    color: ${WHITE};
    text-align: left;
    padding: 0 1rem;
    @media screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
        max-height: 350px;
    }
    h1 {
        padding: 0 4rem;
        font-size: clamp(3rem,5vw,5rem);
    }
    p {
        margin-bottom: 1rem;
        padding: 0 4rem;
        font-size: clamp(1rem,3vw,1rem);
    }
`;