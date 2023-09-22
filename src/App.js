import "./styles.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>
        {show ? "hide" : "show"} modal
      </button>
      <Modal show={show} title="Modal" onClose={() => setShow(false)}>
        <h1>Modal Box</h1>
      </Modal>
    </div>
  );
}

const Modal = ({ show, onClose, title, children }) => {
  return (
    show && (
      <div className="modal-wrapper">
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <span className="modal-close" onClick={onClose}>
            X
          </span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    )
  );
};
