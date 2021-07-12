import React, { forwardRef } from "react";
import "../../css/Modal.css";
const Modal = forwardRef(({ title, state, closeModal, children }, ref) => (
  <div className={`modal ${state && "show-modal"}`} ref={ref}>
    <div className="modal__content">
      <div className="modal__content__header">
        <h1 className="modal__content__header__title">{title}</h1>
        <button
          className="modal__content__header__close-btn"
          onClick={closeModal}
        >
          X
        </button>
      </div>
      <div className="modal__body">{children}</div>
    </div>
  </div>
));
export default Modal;
