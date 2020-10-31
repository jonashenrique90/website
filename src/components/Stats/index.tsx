import React from 'react';
import { StatsSection, StatsContainer, Grid, Content } from './styles';
import { FaServer, FaUpload, FaProjectDiagram } from 'react-icons/fa';

const Stats: React.FC = () => {
    return (
        <StatsSection>
            <StatsContainer>
                <h3>
                Welcome to the best platform for building applications of all types with modern architecture and scaling
                </h3>
                <Grid>
                    <Content>
                        <FaServer size={40}></FaServer>
                        <h3>10.349.405</h3>
                        <p>Deployments</p>
                    </Content>
                    <Content>
                        <FaUpload size={40}></FaUpload>
                        <h3>987 TB</h3>
                        <p>Published</p>
                    </Content>
                    <Content>
                        <FaProjectDiagram size={40}></FaProjectDiagram>
                        <h3>2.343.265</h3>
                        <p>Projects</p>
                    </Content>
                </Grid>
            </StatsContainer>
        </StatsSection>
    )
}

export default Stats;
