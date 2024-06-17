import React from "react";
import Backdrop from "./Backdrop";

import "./Modal.css";

const ModalOverlay = (props) => {
  return (
    <div className={`modal ${props.className}`} style={props.style}>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onClick} color="grey" />}
      <ModalOverlay {...props} />
    </React.Fragment>
  );
};

export default Modal;
