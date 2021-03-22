import React from 'react';
import { Container } from './styles';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from '../../components/Head';
import FeatureGrid from '../../components/FeatureGrid';

const Features: React.FC = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Head></Head>
            <FeatureGrid />
            <Footer></Footer>
        </Container>
    )
}

export default Features;
