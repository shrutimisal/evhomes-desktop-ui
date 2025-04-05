import React from "react";
import styles from "./assigndialog.module.css";

const Assigndialog = ({ onClose }) => {
  return (
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div className={styles.dialogContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>Assign Task</h2>
        
      </div>
    </div>
  );
};

export default Assigndialog;
