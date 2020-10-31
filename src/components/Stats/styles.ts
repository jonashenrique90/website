import styled from 'styled-components';

export const StatsSection = styled.section`
    width: 100%;
    padding: 100px 40px 0;
    max-width: 110rem;
    margin: 0 auto;
`;

export const StatsContainer = styled.div`
    h3 {
        max-width: 500px;
        text-align: center;
        margin: 1rem auto;
    }
`;

export const Grid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
    
    @media (max-width: 710px) {
        grid-template-columns: 1fr;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h3 {
        font-size: 3.5rem;
    }
    
    p {
        font-size: 2rem;
        font-weight: bold;
    }
    @media (max-width: 710px) {
        h3 {
            margin: 2px;
        }
    
        p {
            margin: 0;
        }
    }
`;