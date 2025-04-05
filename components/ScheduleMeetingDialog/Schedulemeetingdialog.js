import React from "react";
import styles from "../AssignTaskDialog/assigndialog.module.css";

const Schedulemeetingdialog = ({ onClose }) => {
  return (
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div
        className={styles.dialogContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}></button>
        <h2>Schedule Meeting</h2>
      </div>
    </div>
  );
};

export default Schedulemeetingdialog;
