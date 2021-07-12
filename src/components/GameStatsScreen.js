import React from "react";
import Button from "../components/Buttons/Button";
import OutlineButton from "../components/Buttons/OutlineButton";
import Container from "./Container";
import Ballon from "./Ballon";
export default function GameStatsScreen() {
  return (
    <Container>
      <div className="game-stats">
        <Header time="1:00" newRecord={true} />
        <Summary data={balloons} totalPopped={17} lost={3} />
        <div className="btn-container">
          <Button
            icon="sync"
            label="RESTART"
            color="primary"
            onClick={() => console.log("Hello World")}
          />
          <OutlineButton
            icon="leftArrow"
            label="Back to menu"
            color="secondary"
            onClick={() => console.log("Outline Button")}
          />
        </div>
      </div>
    </Container>
  );
}
function Header({ time, newRecord }) {
  return (
    <div className="game-stats-header">
      <h1 className="game-stats-title">Game Stats</h1>
      <h3 className="game-stats-ended-in-title">Ended in</h3>
      <h1 className="time">{time}</h1>
      {newRecord && <h1 className="new-record-title">New Record</h1>}
    </div>
  );
}

function BallonPoppedTimes({ times }) {
  return <h1 className="balloon-stat-quantity">{times}</h1>;
}
function BallonStat({ color, quantity }) {
  return (
    <div className="balloon-stat">
      <Ballon color={color} />
      <BallonPoppedTimes times={quantity} />
    </div>
  );
}
function BallonStatList({ data }) {
  return (
    <div className="balloon-stats">
      {data.map((item, i) => (
        <BallonStat key={i} color={item.color} quantity={item.quantity} />
      ))}
    </div>
  );
}
function BallonSummary({ totalPopped, lost }) {
  return (
    <div className="game-stats-summary">
      <p>
        <span className="total-popped">Total popped:</span> {totalPopped}
      </p>
      <p>
        <span className="lost-balloons">Lost:</span> {lost}
      </p>
    </div>
  );
}
function Summary({ data, totalPopped, lost }) {
  return (
    <div>
      <h1 className="balloons-popped-title">Balloons Popped</h1>
      <BallonStatList data={data} />
      <BallonSummary totalPopped={totalPopped} lost={lost} />
    </div>
  );
}
const balloons = [
  {
    color: "primary",
    quantity: 1,
  },
  {
    color: "secondary",
    quantity: 2,
  },
  {
    color: "yellow",
    quantity: 3,
  },
  {
    color: "light",
    quantity: 4,
  },
  {
    color: "dark",
    quantity: 5,
  },
];
