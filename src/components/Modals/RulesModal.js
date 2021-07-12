import React, { forwardRef } from "react";
import Modal from "./Modal";
const RulesModal = forwardRef(({ title, state, closeModal }, ref) => {
  return (
    <Modal title={title} state={state} closeModal={closeModal} ref={ref}>
      <p>I'm the rules modal!!!</p>
    </Modal>
  );
});
export default RulesModal;
