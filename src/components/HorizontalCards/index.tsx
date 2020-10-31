import React from 'react';
import NodeLogo from '../../assets/logos/node.png';
import CSharpLogo from '../../assets/logos/csharp.png';
import PythonLogo from '../../assets/logos/python.png';
import RubyLogo from '../../assets/logos/ruby.png';
import PHPLogo from '../../assets/logos/php.png';
import ScalaLogo from '../../assets/logos/scala.png';
import ClojureLogo from '../../assets/logos/clojure.png';
import { SectionContainer, Container, Card } from './styles';

const HorizontalCards = () => {
    return (
        <SectionContainer>
            <h2>Supported Languages</h2>
            <Container>
                <Card>
                    <h4>Node.js</h4>
                    <img src={NodeLogo} alt="Nodejs"/>
                </Card>
                <Card>
                    <h4>Python</h4>
                    <img src={PythonLogo} alt="C#"/>
                </Card>
                <Card>
                    <h4>C#</h4>
                    <img src={CSharpLogo} alt="C#"/>
                </Card>
                <Card>
                    <h4>Ruby</h4>
                    <img src={RubyLogo} alt="Ruby"/>
                </Card>
                <Card>
                    <h4>PHP</h4>
                    <img src={PHPLogo} alt="PHP"/>
                </Card>
                <Card>
                    <h4>Scala</h4>
                    <img src={ScalaLogo} alt="Scala"/>
                </Card>
                <Card>
                    <h4>Clojure</h4>
                    <img src={ClojureLogo} alt="Clojure"/>
                </Card>
            </Container>
            
        </SectionContainer>
    )
}

export default HorizontalCards;
