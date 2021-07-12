import React, { useRef, useState, useEffect, forwardRef } from "react";
import lodash from "lodash";
import Ballon from "./Ballon";
import Modal from "./Modals/Modal";
import Button from "./Buttons/Button";
import OutlineButton from "./Buttons/OutlineButton";
export default function GameScreen() {
  const [isDisplayingSettingsModal, setIsDisplayingSettingsModal] =
    useState(false);
  const settingsModal = useRef(null);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target === settingsModal.current) {
        closeSettingsModal();
      }
    });
  }, []);
  const openSettingsModal = () => {
    setIsDisplayingSettingsModal(true);
  };
  const closeSettingsModal = () => {
    setIsDisplayingSettingsModal(false);
  };
  return (
    <>
      <ToolBar color="red" time="0:00" onClickFunction={openSettingsModal} />
      <DisplayBalloons />
      <SettingsModal
        ref={settingsModal}
        state={isDisplayingSettingsModal}
        closeModal={closeSettingsModal}
      />
    </>
  );
}

function DisplayBalloons() {
  return (
    <div className="balloons">
      {lodash
        .range(20)
        .map((n) =>
          n % 2 === 0 ? (
            <Ballon key={n} color="dark" handleEvent={() => {}} />
          ) : (
            <PoppedBalloon key={n} color="dark" />
          )
        )}
    </div>
  );
}
function PoppedBalloon({ color }) {
  return <div className={`popped-balloon popped-${color}-balloon`}>POP</div>;
}
function ToolBar({ color, time, onClickFunction }) {
  return (
    <nav className="toolbar">
      <BalloonToPop color={color} />
      <CountDownTimer time={time} />
      <Settings onClick={onClickFunction} />
    </nav>
  );
}
function BalloonToPop({ color }) {
  return <div className={`balloon-to-pop ${color}-balloon`}></div>;
}
function CountDownTimer({ time }) {
  return <h1 className="time-left">{time}</h1>;
}
function Settings({ onClick }) {
  return (
    <button className="settings" onClick={onClick}>
      <i className="fas fa-cogs fa-3x"></i>
    </button>
  );
}
const SettingsModal = forwardRef(({ state, closeModal }, ref) => {
  return (
    <Modal title="Settings" state={state} closeModal={closeModal} ref={ref}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          icon="sync"
          label="RESTART"
          color="primary"
          onClick={() => console.log("Restart Game")}
        />
        <OutlineButton
          icon="leftArrow"
          label="QUIT"
          color="secondary"
          onClick={() => console.log("QUIT GAME")}
        />
      </div>
    </Modal>
  );
});
