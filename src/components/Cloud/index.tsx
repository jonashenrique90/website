import React from 'react';
import { SectionContainer, CloudContainer, ButtonLink, TextContainer, ContainerGrid } from './styles';
import CloudImage from '../../assets/cloud.png';

const Cloud: React.FC = () => {
    return (
        <SectionContainer>
            <CloudContainer>
                <ContainerGrid>
                    <TextContainer>
                        <h2>Extreme Cloud Hosting</h2>
                        <p>Cloud hosting like you've never seen. Fast, efficient and scalable</p>
                        <ButtonLink to="/features">Read More</ButtonLink>
                    </TextContainer>
                    <img src={CloudImage} alt="Cloud Image"/>
                </ContainerGrid>
            </CloudContainer>
        </SectionContainer>
    )
}

export default Cloud;
