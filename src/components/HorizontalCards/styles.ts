import styled from 'styled-components';

export const SectionContainer = styled.section`
    padding: 10px 0;
    h2 { 
        text-align: center;
        font-weight: 400;
        letter-spacing: 3;
        margin-bottom: 10px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
export const Card = styled.div`
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 10px;
    transition: transform 0.3s;
    h4 { 
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 2rem;
        text-align: center;
    }
    &:hover {
        transform: translateY(-15px);
    }
`;