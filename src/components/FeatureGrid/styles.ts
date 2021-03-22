import styled from 'styled-components';

export const GridSection = styled.section`
    width: 100%;
    padding: 0 40px;
    max-width: 110rem;
    margin: 0 auto;
`;

export const Container = styled.div`

`;

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 10px;
    /* svg {
        margin-right: 20px;
    } */
    /* p {
        font-size: 1.6rem;
    } */


`;