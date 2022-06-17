import styled from 'styled-components'
import { Link} from 'react-router-dom'
import { BLACK, PRIMARY, WHITE } from '../styles/color';

export const Button = styled(Link)`
    background:${({primary})=> (primary ? BLACK : PRIMARY)};
    white-space:nowrap;
    outline:none;
    border:none;
    min-width:100px;
    max-width:200px;
    cursor:pointer;
    text-decoration:none;
    transition:0.3s;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:${({big}) => (big ? '16px 40px' : '14px 24px')};
    color:${({primary})=> (primary ? WHITE : BLACK)};
    font-size: ${({big})=> (big ? '20px' : '14px')};
    &:hover {
        transform:translateY(-2px);
    }
`;