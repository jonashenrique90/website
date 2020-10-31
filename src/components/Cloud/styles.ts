import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionContainer = styled.section`
    width: 100%;
    padding: 0 40px;
    max-width: 110rem;
    margin: 0 auto;
`;
export const CloudContainer = styled.div`
    padding: 20px 0;
    margin: 20px 0;
    background: #047aed;
    color: #fff;
`;

export const ContainerGrid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 4fr 3fr;
    gap: 30px;
    justify-content: center;
    align-items: center;
`;

export const TextContainer = styled.div`
    text-align: center;
    h2 {
        font-size: 3rem;
        font-weight: bold;
    }
    p {
        font-size: 2rem;
    }
`;

export const ButtonLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    cursor: pointer;
    background: #002240;
    color: #fff;
    border: 1px solid #002240;
    border-radius: 5px;
    transition: transform 0.3s, opacity 0.3s ease-in;
    
    &:hover {
        transform: scale(1.07);
    }

`;
