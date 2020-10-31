import React from 'react';
import { Container } from './styles';
import Navbar from '../../components/Navbar';
import Showcase from '../../components/Showcase';
import Stats from '../../components/Stats';
import Cli from '../../components/Cli';
import Cloud from '../../components/Cloud';
import HorizontalCards from '../../components/HorizontalCards';
import Footer from '../../components/Footer';

const Landing: React.FC = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Showcase></Showcase>
            <Stats></Stats>
            <Cli></Cli>
            <Cloud></Cloud>
            <HorizontalCards></HorizontalCards>
            <Footer></Footer>
        </Container>
    )
}

export default Landing;
