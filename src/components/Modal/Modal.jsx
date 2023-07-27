import React, { Component } from "react";
import css from './Modal.module.scss'
import { createPortal } from "react-dom";

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css['overlay']} onClick={this.handleClickBackdrop}>
        <div className={css['modal']}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

// export default Modal;
