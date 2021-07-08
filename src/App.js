import React from "react";

export default function App() {
  // TODO: Display buttons on column
  return (
    // <div className="game-menu-screen">
    //   <h1 className="menu-screen-title">Balloon Popping</h1>
    //   {/* <div className="btn-container">
    //     <button type="button" className="btn primary-btn start-btn">
    //       START
    //     </button>
    //     <button type="button" className="btn secondary-btn rules-btn">
    //       Rules
    //     </button>
    //     <button type="button" className="btn white-btn records-btn">
    //       Records
    //     </button>
    //   </div>
    // </div> */}
    <div>
      <nav className="navbar">
        <div className="balloon-to-pop-toolbar">
          <h1 className="balloon-to-pop-title">Balloon to POP </h1>
          <div className="balloon-to-pop"></div>
        </div>
        <div className="switching-balloon-in-toolbar">
          <h1 className="switching-balloon-in-title">Switching balloon in</h1>
          <h1 className="switching-balloon-in-time">0:00</h1>
        </div>
        <h1 className="settings">
          <i className="fas fa-cogs fa-3x"></i>
        </h1>
      </nav>
      <div className="balloons">
        <div className="balloons-row">
          <div className="balloon-popped">POP</div>
        </div>
        <div className="balloons-row">
          <div className="balloon"></div>
          <div className="balloon green-balloon"></div>
          <div className="balloon white-balloon"></div>
          <div className="balloon red-balloon"></div>
          <div className="balloon yellow-balloon"></div>
        </div>
        <div className="balloons-row">
          <div className="balloon"></div>
          <div className="balloon green-balloon"></div>
          <div className="balloon white-balloon"></div>
          <div className="balloon red-balloon"></div>
          <div className="balloon yellow-balloon"></div>
        </div>
        <div className="balloons-row">
          <div className="balloon"></div>
          <div className="balloon green-balloon"></div>
          <div className="balloon white-balloon"></div>
          <div className="balloon red-balloon"></div>
          <div className="balloon yellow-balloon"></div>
        </div>
        <div className="balloons-row">
          <div className="balloon"></div>
          <div className="balloon green-balloon"></div>
          <div className="balloon white-balloon"></div>
          <div className="balloon red-balloon"></div>
          <div className="balloon yellow-balloon"></div>
        </div>
      </div>
    </div>

    // GAME STATS SCREEN

    // <div className="game-stats-screen">
    //   <header className="game-stats-header">
    //     <h1 className="game-stats-title">Game Stats</h1>
    //     <h3 className="game-stats-ended-in-title">Ended in</h3>
    //     <h1 className="time">12:00</h1>
    //     <h1 className="new-record-title">New Record</h1>
    //   </header>
    //   <div>
    //     <h1 className="balloons-popped-title">Balloons Popped</h1>
    //     <div className="balloon-stats">
    //       <div className="balloon-stat">
    //         <div className="balloon red-balloon"></div>
    //         <h1 className="balloon-stat-quantity">23</h1>
    //       </div>
    //       <div className="balloon-stat">
    //         <div className="balloon green-balloon"></div>
    //         <h1 className="balloon-stat-quantity">10</h1>
    //       </div>
    //       <div className="balloon-stat">
    //         <div className="balloon yellow-balloon"></div>
    //         <h1 className="balloon-stat-quantity">3</h1>
    //       </div>
    //       <div className="balloon-stat">
    //         <div className="balloon white-balloon"></div>
    //         <h1 className="balloon-stat-quantity">9</h1>
    //       </div>
    //       <div className="balloon-stat">
    //         <div className="balloon black-balloon"></div>
    //         <h1 className="balloon-stat-quantity">5</h1>
    //       </div>
    //     </div>
    //     <div className="game-stats-summary">
    //       <p>
    //         <span className="total-popped">Total popped:</span> 23
    //       </p>
    //       <p>
    //         <span className="lost-balloons">Lost:</span> 5{" "}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="btn-container">
    //     <button className="btn primary-btn">RESTART</button>
    //     <button className="outline-btn primary-outline-btn">
    //       Back to menu
    //     </button>
    //   </div>
    // </div>
  );
}
