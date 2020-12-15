import * as React from 'react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackGroundStyle } from '../styles/Modal'
import JoinGame from './JoinGame'

const modalRoot = document.getElementById('modal');

export const Modal:React.FC = (props) => {
  return createPortal(<ModalBackGroundStyle>{props.children}</ModalBackGroundStyle>, modalRoot);

};

