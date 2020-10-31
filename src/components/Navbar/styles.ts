import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 110rem;
    background: #047aed;
    color: #fff;
    height: 7rem;
    margin: 0 auto;
    overflow: auto;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Nav = styled.nav`
    ul {
        list-style-type: none;
        display: flex;
    }
`;

export const Links = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 10px;
    margin: 0 5px;
    
    &:hover {
            border-bottom: 2px solid #fff;
        }        

`;