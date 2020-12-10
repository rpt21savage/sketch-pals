import * as React from 'react';
import { Container, InterActiveButton, ButtonContainer, StyledHeader } from '../styles/Landing';
import styled from 'styled-components'


const Landing:React.FC = () => {
  // Should include title, and "Join Game" / "Create a Game" buttons. Possibly option to view ongoing public games
  return (
    <Container>
      <StyledHeader>
          <h1>Sketch Pals</h1>
      </StyledHeader>
          <ButtonContainer>
            <InterActiveButton>Create Game</InterActiveButton>
            <InterActiveButton>Join Game</InterActiveButton>
          </ButtonContainer>
    </Container>
  );
}

export { Landing };
