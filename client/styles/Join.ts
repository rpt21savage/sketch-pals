import styled from 'styled-components';

export const ModalStyle = styled.div`
  padding: 2;
  background: #fff;
  border-radius: 8px;
  display: inline-block;
  height: 300px;
  border-radius: 15px;
  margin: 1rem;
  position: relative;
  min-width: 500px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-self: center;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: #FCEFEE;
`;

export const JoinContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const JoinHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

export const VerifyButton = styled.button`
  background: #CC2E28;
  padding: 20px;
  width: 15%;
  margin-top: 10px;
  min-width: 200px;
  border-radius: 12px;
  color: white;
  border: none;
`;
