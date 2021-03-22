import React from 'react';
import { FaDatabase, FaLaptop, FaNetworkWired, FaPowerOff, FaServer, FaUpload } from 'react-icons/fa';
import { GridSection, Container, ContainerGrid, Card} from './styles';

const FeatureGrid: React.FC = () => {
    return (
        <GridSection>
            <Container>
                <ContainerGrid>
                    <Card>
                        <FaServer size={40}></FaServer>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo saepe corrupti et dolorem voluptate at, nostrum rem voluptatem ab alias quia molestiae ea, libero nihil deserunt. Molestias, eum? Necessitatibus!
                        </p>
                    </Card>
                    <Card>
                        <FaNetworkWired size={40}></FaNetworkWired>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        recusandae perferendis culpa, reiciendis a itaque debitis qui vel
                        dignissimos ipsum!
                        </p>
                    </Card>
                    <Card>
                        <FaLaptop size={40}></FaLaptop>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                        magnam.
                        </p>
                    </Card>
                    <Card>
                        <FaDatabase size={40}></FaDatabase>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!
                        </p>
                    </Card>
                    <Card>
                        <FaPowerOff size={40}></FaPowerOff>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                        magnam.
                        </p>
                    </Card>
                    <Card>
                        <FaUpload size={40}></FaUpload>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                        magnam.
                        </p>
                    </Card>
                </ContainerGrid>
            </Container>
        </GridSection>
    )
}

export default FeatureGrid;
