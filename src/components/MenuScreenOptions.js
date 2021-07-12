import React from "react";
import Button from "./Buttons/Button";
import "../css/MenuScreenOptions.css";
export default function MenuScreenOptions({
  openRulesModal,
  openRecordsModal,
  startGame,
}) {
  return (
    <div className="button-list">
      <Button
        label="START"
        color="primary"
        icon="gamepad"
        customStyle={{ margin: "7px 0px" }}
        onClick={startGame}
      />
      <Button
        label="Rules"
        color="secondary"
        icon="question"
        customStyle={{ margin: "7px 0px" }}
        onClick={openRulesModal}
      />
      <Button
        label="Records"
        color="light"
        icon="star"
        customStyle={{ margin: "7px 0px" }}
        onClick={openRecordsModal}
      />
    </div>
  );
}
