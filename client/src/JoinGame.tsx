import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ModalStyle, JoinContainer, JoinHeader, VerifyButton } from '../styles/Join';

interface Props {
  toggleModal: (isActive: boolean) => void;
  isActive: boolean
}
const JoinGame:React.FC<Props> = ( { toggleModal, isActive } ) => {
  const myRef = useRef<HTMLDivElement>(null)
  const [gameLink, setGameLink] = useState<string>("");

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      console.log('Outside!')
      toggleModal(!isActive)
    }
  };

  const handleClickInside = () => {
    console.log('Inside')
  };

  const verifyEmailLink = () => {
    console.log('Here is the game Link', gameLink);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
      <ModalStyle ref={myRef} onClick={()=> handleClickInside()}>
        <JoinContainer >
          <JoinHeader>Join Game</JoinHeader>
          <div>
            <label>
            Game Link: <input type="text" value={gameLink} onChange={e => { setGameLink(e.target.value)}}/>
            </label>
          </div>
            <VerifyButton onClick={() => verifyEmailLink()}>Verify Link</VerifyButton>
        </JoinContainer>
      </ModalStyle>
  );
};

export default JoinGame;