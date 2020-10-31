import React from 'react';
import { SectionContainer, ContainerGrid, Card } from './styles';
import CliImage from '../../assets/cli.png';

const Cli: React.FC = () => {
    return (
        <SectionContainer>
            <ContainerGrid>
                <img src={CliImage} alt="cli"/>
                <Card>
                    <h3>Easy to use, cross platform CLI</h3>
                </Card>
                <Card>
                    <h3>Deploy in seconds</h3>
                </Card>
            </ContainerGrid>
        </SectionContainer>
    )
}

export default Cli;
