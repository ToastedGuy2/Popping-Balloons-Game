import React, { useState, useRef, useEffect } from "react";
import Container from "./Container";
import MenuScreenOptions from "./MenuScreenOptions";
import RulesModal from "./Modals/RulesModal";
import RecordsModal from "./Modals/RecordsModal";

export default function MenuScreen() {
  const [isDisplayingRulesModal, setIsDisplayingRulesModal] = useState(false);
  const rulesModal = useRef(null);
  const [isDisplayingRecordsModal, setIsDisplayingRecordsModal] =
    useState(false);
  const recordsModal = useRef(null);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target === rulesModal.current ||
        e.target === recordsModal.current
      ) {
        closeRulesModal();
        closeRecordsModal();
      }
    });
  }, []);
  const openRulesModal = () => {
    setIsDisplayingRulesModal(true);
  };
  const closeRulesModal = () => {
    setIsDisplayingRulesModal(false);
  };
  const openRecordsModal = () => {
    setIsDisplayingRecordsModal(true);
  };
  const closeRecordsModal = () => {
    setIsDisplayingRecordsModal(false);
  };
  return (
    <>
      <Container>
        <div className="menu-screen">
          <h1 className="menu-screen__title">Balloon Popping</h1>
          <MenuScreenOptions
            openRulesModal={openRulesModal}
            openRecordsModal={openRecordsModal}
          />
        </div>
      </Container>

      <RulesModal
        title="Rules"
        state={isDisplayingRulesModal}
        closeModal={closeRulesModal}
        ref={rulesModal}
      ></RulesModal>
      <RecordsModal
        title="Records"
        state={isDisplayingRecordsModal}
        closeModal={closeRecordsModal}
        ref={recordsModal}
      ></RecordsModal>
    </>
  );
}
