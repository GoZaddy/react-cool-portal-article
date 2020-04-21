import React, { useState } from "react";
import "./App.css";

import usePortal from "react-cool-portal";

function App() {
  const { Portal, show, hide } = usePortal({
    defaultShow: false,
    onShow: () => {
      setAnimationState("slideIn");
    },
  });

  const [showModal, setShowModal] = useState(false);
  const [animationState, setAnimationState] = useState("");
  console.log(animationState);
  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
          show();
          
        }}
      >
        Open Modal
      </button>
      {showModal && (
        <Portal>
          <div className= "modal" tabIndex={-1}>
            <div
              className={`modal-dialog ${animationState}`}
              role="dialog"
              aria-labelledby="modal-label"
              aria-modal="true"
              onAnimationEnd={() => {
                if(animationState == "slideOut"){
                  hide();
                }
                setAnimationState("");
              }}
            >
              <div className="modal-header">
                <h5 id="modal-label">Modal header</h5>
                <span
                  className="modal-exit"
                  onClick={() => {
                    setAnimationState("slideOut");
                  }}
                >
                  close
                </span>
              </div>
              <div className="modal-body">
                <p>Modal Body</p>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}

export default App;
