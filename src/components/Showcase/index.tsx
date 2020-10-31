import React from 'react';
import { Container, ContainerGrid, ShowcaseText, ButtonLink, ShowcaseForm, ShowcaseFormCard, FormControl, Button } from './styles';

const Showcase: React.FC = () => {
    return (
        <Container>
            <ContainerGrid>
                <ShowcaseText>
                    <h1>Easier Deployment</h1>
                    <p>Deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals. Fill out the form to try a demo of our platform</p>
                    <ButtonLink to="/features">Read More</ButtonLink>
                </ShowcaseText>
                <ShowcaseFormCard>
                    <ShowcaseForm>
                        <h2>Request a demo</h2>
                        <form>
                            <FormControl>
                                <input type="text"name="name" placeholder="Name" required/>
                            </FormControl>
                            <FormControl>
                                <input type="text"name="company" placeholder="Company Name" required/>
                            </FormControl>
                            <FormControl>
                                <input type="email"name="email" placeholder="E-mail" required/>
                            </FormControl>
                                <Button type="submit" value="Send" />
                        </form>
                    </ShowcaseForm>
                </ShowcaseFormCard>
            </ContainerGrid>
        </Container>
    )
}

export default Showcase;
