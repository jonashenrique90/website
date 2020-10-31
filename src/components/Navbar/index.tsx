import React from 'react';
import { Container, Nav, Links } from './styles';


const Navbar: React.FC = () => {
    return (
        <Container>
            <h1>Loruki.</h1>
            <Nav>
                <ul>
                    <li>
                        <Links to="/">Home</Links>
                    </li>
                    <li>
                        <Links to="/">Features</Links>
                    </li>
                    <li>
                        <Links to="/">Docs</Links>
                    </li>
                </ul>
            </Nav>
        </Container>
    )
}

export default Navbar;
