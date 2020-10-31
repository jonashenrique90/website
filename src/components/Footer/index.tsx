import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FooterSection, Container, Grid, Nav, Links, FooterText, Social, SocialLinks } from './styles';

const Footer: React.FC = () => {
    return (
        <FooterSection>
            <Container>
                <Grid>
                    <FooterText>
                    <h1>Loruki</h1>
                    <p>
                        🤡  Copyright &copy; 2020 🤡 
                    </p>
                    </FooterText>
                    <Nav>
                        <ul>
                            <li>
                                <Links to="/">Home</Links>
                            </li>
                            <li>
                                <Links to="/">Feature</Links>
                            </li>
                            <li>
                                <Links to="/">Docs</Links>
                            </li>
                        </ul>
                    </Nav>
                    <Social>
                        <SocialLinks to="/">
                            <FaGithub size={30}></FaGithub>
                        </SocialLinks>
                        <SocialLinks to="/">
                            <FaLinkedin size={30}></FaLinkedin>
                        </SocialLinks>
                        <SocialLinks to="/">
                            <FaFacebook size={30}></FaFacebook>
                        </SocialLinks>
                        <SocialLinks to="/">
                            <FaInstagram size={30}></FaInstagram>
                        </SocialLinks>
                        <SocialLinks to="/">
                            <FaTwitter size={30}></FaTwitter>
                        </SocialLinks>
                    </Social>
                </Grid>
            </Container>
        </FooterSection>
    )
}

export default Footer;
