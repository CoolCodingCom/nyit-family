import React from 'react';

import './Nbutton.css';

const Nbutton = props => {
  return (
    <button
      className={`normal-button normal-button--${props.size || 'default'} ${props.danger && 'normal-button__danger'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Nbutton;