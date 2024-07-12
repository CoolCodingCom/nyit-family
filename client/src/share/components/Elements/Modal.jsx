import React from "react";
import Backdrop from "./Backdrop";

import style from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={`${style.modal} ${props.className}`} style={props.style}>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`${style.modal__content} ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`${style.modal__footer} ${props.footerClass}`}>
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
