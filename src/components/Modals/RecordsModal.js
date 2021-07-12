import React, { forwardRef } from "react";
import Modal from "./Modal";
const RecordsModal = forwardRef(({ title, state, closeModal }, ref) => {
  return (
    <Modal title={title} state={state} closeModal={closeModal} ref={ref}>
      <p>I'm the records modal!!!</p>
    </Modal>
  );
});
export default RecordsModal;
