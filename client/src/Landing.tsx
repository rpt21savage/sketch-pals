import * as React from 'react';
import { Container, InterActiveButton, ButtonContainer, StyledHeader } from '../styles/Landing';
import { Modal } from './Modal'
import JoinGame from './JoinGame'

const Landing:React.FC = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  // Should include title, and "Join Game" / "Create a Game" buttons. Possibly option to view ongoing public games
  return (
    <Container>
      <StyledHeader>
          <h1>Sketch Pals</h1>
      </StyledHeader>
          <ButtonContainer>
            <InterActiveButton>Create Game</InterActiveButton>
            <InterActiveButton  onClick={()=> setModal(!modal)}>Join Game</InterActiveButton>
          </ButtonContainer>
          {modal ? (<Modal> <JoinGame toggleModal={setModal} isActive={modal}></JoinGame></Modal>) : null}
    </Container>
  );
};

export { Landing };
