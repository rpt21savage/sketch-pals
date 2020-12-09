import * as React from 'react';
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
background: rgb(74,142,231);
background: linear-gradient(180deg, rgba(74,142,231,1) 0%, rgba(169,244,173,1) 100%);
display: flex;
flex-direction: column;
justify-content: center;

`

const Landing:React.FC = () => {
  // Should include title, and "Join Game" / "Create a Game" buttons. Possibly option to view ongoing public games
  return (
    <Container>
    </Container>
  );
}

export { Landing };
