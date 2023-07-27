import React, { useState } from "react";
import css from "./ImageGalleryItem.module.scss";
import { Modal } from "../Modal/Modal";
import { Component } from "react";

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isShowModal: !prevState.isShowModal,
    }));
  };

  render() {
    const { url, alt, largeImage } = this.props;
    const { isShowModal } = this.state;
    return (
      <>
        <li
          className={css["imageGalleryItem"]} onClick={this.toggleModal}>
          <img className={css["imageGalleryItem-image"]} src={url} alt={alt} loading="lazy"/>
        </li>
        {isShowModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={alt} width='800px'/>
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
