import React, { useState, useRef, useEffect } from "react";
export default function App() {
  const [toggle, setToggle] = useState(false);
  const modal = useRef(null);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target === modal.current) {
        setToggle(false);
      }
    });
  }, []);
  return (
    <>
      <div className="game-menu-screen">
        <div className="game-menu-screen-content">
          <h1 className="menu-screen-title">Balloon Popping</h1>
          <div className="btn-wrapper">
            <button type="button" className="btn primary-btn start-btn">
              <i class="fas fa-gamepad"></i> START
            </button>
            <button
              type="button"
              className="btn secondary-btn rules-btn"
              onClick={() => setToggle(true)}
            >
              <i class="fas fa-question"></i> Rules
            </button>
            <button type="button" className="btn white-btn records-btn">
              <i class="fas fa-star"></i> Records
            </button>
          </div>
        </div>
      </div>
      <div className={`modal ${toggle && "show-modal"}`} ref={modal}>
        <div className="modal__content">
          <div className="modal__content__header">
            <h1 className="modal__content__header__title">Rules</h1>
            <button
              className="modal__content__header__close-btn"
              onClick={() => setToggle(false)}
            >
              X
            </button>
          </div>
          <div className="modal__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              molestias culpa explicabo tenetur quaerat labore impedit eaque
              officiis sapiente aliquid.
            </p>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div>
    //     <nav className="toolbar">
    //       <div className="balloon-to-pop"></div>
    //       <h1 className="time-left">0:00</h1>
    //       <button className="settings" onClick={() => setToggle(true)}>
    //         <i className="fas fa-cogs fa-3x"></i>
    //       </button>
    //     </nav>
    //     <div className="balloons">
    //       <div className="balloon"></div>
    //       <div className="balloon green-balloon"></div>
    //       <div className="balloon white-balloon"></div>
    //       <div className="balloon red-balloon"></div>
    //       <div className="balloon yellow-balloon"></div>
    //       <div className="balloon"></div>
    //       <div className="balloon green-balloon"></div>
    //       <div className="balloon white-balloon"></div>
    //       <div className="balloon red-balloon"></div>
    //       <div className="balloon yellow-balloon"></div>
    //       <div className="balloon"></div>
    //       <div className="balloon green-balloon"></div>
    //       <div className="balloon white-balloon"></div>
    //       <div className="balloon red-balloon"></div>
    //       <div className="balloon yellow-balloon"></div>
    //       <div className="balloon"></div>
    //       <div className="balloon green-balloon"></div>
    //       <div className="balloon white-balloon"></div>
    //       <div className="balloon red-balloon"></div>
    //       <div className="balloon yellow-balloon"></div>
    //     </div>
    //   </div>
    //   <div className={`modal ${toggle && "show-modal"}`} ref={modal}>
    //     <div className="modal__content">
    //       <div className="modal__content__header">
    //         <h1 className="modal__content__header__title">Settings</h1>
    //         <button
    //           className="modal__content__header__close-btn"
    //           onClick={() => setToggle(false)}
    //         >
    //           X
    //         </button>
    //       </div>
    //       <div
    //         className="modal__body"
    //         style={{ display: "flex", flexDirection: "column" }}
    //       >
    //         <button type="button" className="btn primary-btn">
    //           <i class="fas fa-sync-alt"></i> Restart
    //         </button>
    //         <button type="button" className="outline-btn secondary-outline-btn">
    //           <i class="fas fa-skull-crossbones"></i> Quit
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </>
    // GAME STATS SCREEN

    // <div className="container">
    //   <div className="game-stats">
    //     <header className="game-stats-header">
    //       <h1 className="game-stats-title">Game Stats</h1>
    //       <h3 className="game-stats-ended-in-title">Ended in</h3>
    //       <h1 className="time">12:00</h1>
    //       <h1 className="new-record-title">New Record</h1>
    //     </header>
    //     <div>
    //       <h1 className="balloons-popped-title">Balloons Popped</h1>
    //       <div className="balloon-stats">
    //         <div className="balloon-stat">
    //           <div className="balloon red-balloon"></div>
    //           <h1 className="balloon-stat-quantity">23</h1>
    //         </div>
    //         <div className="balloon-stat">
    //           <div className="balloon green-balloon"></div>
    //           <h1 className="balloon-stat-quantity">10</h1>
    //         </div>
    //         <div className="balloon-stat">
    //           <div className="balloon yellow-balloon"></div>
    //           <h1 className="balloon-stat-quantity">3</h1>
    //         </div>
    //         <div className="balloon-stat">
    //           <div className="balloon white-balloon"></div>
    //           <h1 className="balloon-stat-quantity">9</h1>
    //         </div>
    //         <div className="balloon-stat">
    //           <div className="balloon black-balloon"></div>
    //           <h1 className="balloon-stat-quantity">5</h1>
    //         </div>
    //       </div>
    //       <div className="game-stats-summary">
    //         <p>
    //           <span className="total-popped">Total popped:</span> 23
    //         </p>
    //         <p>
    //           <span className="lost-balloons">Lost:</span> 5{" "}
    //         </p>
    //       </div>
    //     </div>
    //     <div className="btn-container">
    //       <button className="btn primary-btn">
    //         <i class="fas fa-sync-alt"></i> RESTART
    //       </button>
    //       <button className="outline-btn secondary-outline-btn">
    //         <i class="fas fa-arrow-left"></i> Back to menu
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
