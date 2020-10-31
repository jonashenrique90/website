import styled from 'styled-components';

export const SectionContainer = styled.section`
    width: 100%;
    padding: 0 40px;
    max-width: 110rem;
    margin: 0 auto;
`;

export const ContainerGrid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
    justify-content: center;
    align-items: center;
    
    img {
        grid-column: 1/ span 2;
        grid-row: 1/ span 2;
    }

    @media (max-width: 710px) {
        grid-template-columns: 1fr;
    }
`;
export const Card = styled.div`
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 10px;
`;