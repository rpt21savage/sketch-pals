import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ModalStyle, JoinContainer, JoinHeader } from '../styles/Join';

interface Props {
  toggleModal: (isActive: boolean) => void;
  isActive: boolean
}
const JoinGame:React.FC<Props> = ( { toggleModal, isActive } ) => {
  const myRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      console.log('Outside!')
      toggleModal(!isActive)
    }
  };

  const handleClickInside = () => {
    console.log('Inside')
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
      <ModalStyle ref={myRef} onClick={()=> handleClickInside()}>
        <JoinContainer >
          <JoinHeader>Join Game</JoinHeader>
        </JoinContainer>
      </ModalStyle>
  );
};

export default JoinGame;