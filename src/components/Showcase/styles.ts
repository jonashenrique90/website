import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
    width: 100%;
    padding: 0 40px;
    height: 400px;
    background-color: #047aed;
    color: #fff;
    position: relative;
    overflow: visible;
    max-width: 110rem;
    margin: 0 auto;

    &:after, &:before {
        content: '';
        position: absolute;
        height: 100px;
        bottom: -70px;
        right: 0;
        left: 0;
        background: #fff;
        transform: skewY(-3deg);
        -webkit-transform: skewY(-3deg);
        -moz-transform: skewY(-3deg);
        -ms-transform: skewY(-3deg);

    } 
`;

export const ContainerGrid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 55% 45%;
    gap: 30px;
    justify-content: center;
    align-items: center;
`;

export const ShowcaseText = styled.div`
    h1 {
        font-size: 4rem;
    }

    p {
        margin: 20px 0;
    }
`;

export const ButtonLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    cursor: pointer;
    background: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: transform 0.3s, opacity 0.3s ease-in;
    
    &:hover {
        transform: scale(1.07);
    }

`;

export const ShowcaseFormCard = styled.div`
    position: relative;
    top: 60px;
    width: 400px;
    height: 350px;
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 10px;
    z-index: 10;
`;

export const ShowcaseForm = styled.div`
    padding: 40px;
    z-index: 100;
    justify-self: flex-end;
`;

export const FormControl = styled.div`
    margin: 30px 0;

    input[type='text'], input[type='email'] {
        border: 0;
        border-bottom: 1px solid #b4becb;
        width: 100%;
        padding: 3px;
        font-size: 1.6rem;
        
        &:focus {
            outline: none;
        }
    }

`;

export const Button = styled.input`        
    display: inline-block;
    padding: 10px 30px;
    cursor: pointer;
    background: #047aed;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: transform 0.3s, opacity 0.3s ease-in;
    
    &:hover {
        transform: scale(1.07);
    }
`;
