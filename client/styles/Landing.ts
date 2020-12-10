import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: rgb(74,142,231);
  background: linear-gradient(180deg, rgba(74,142,231,1) 0%, rgba(169,244,173,1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const InterActiveButton = styled.button`
  background: #f7fade;
  padding: 20px;
  width: 15%;
  margin-top: 10px;
  min-width: 200px;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
export const StyledHeader = styled.header`
  font-size: 4em;

  @media(max-width: 700px) {
    font-size: 3em;
  }
  @media(max-width: 550px) {
    font-size: 2em;
  }
  @media(max-width: 350px) {
    font-size: 1.5em;
  }
`
