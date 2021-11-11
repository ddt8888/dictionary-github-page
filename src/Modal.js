import React from "react";
import './Modal.css'

function Modal({ open, children }) {
    return <div className={`Modal ${open ? "open" : "close"}`}>{children}</div>
}
export default Modal

// props 기본 값을 false로 한다.
Modal.defaultProps = {
    open: false
}