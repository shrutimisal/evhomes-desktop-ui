
import React, { useEffect, useState } from "react";
import styles from "../Dialogs/assigndialog.module.css";
import style from "./sendnotificationdialog.module.css";

const Setreminderdialog = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timeout = setTimeout(() => {
        onClose();
      }, 300);
    }
  }, [isClosing, onClose]);

  return (
    <div className={styles.dialogOverlay} onClick={handleClose}>
      <div
        className={`${styles.dialogContainer} ${
          isClosing ? styles.slideOut : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}></button>
        <h2>Set Reminder</h2>
        <div className={styles.formControl}>
          <label htmlFor="text">Enter Title</label>
          <input name="text" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="text">Description</label>
          <textarea name="text" rows="5" />
        </div>

        <div className={style.buttonContainer}>
          <button className={style.Button}>Set Reminder</button>
        </div>
      </div>
    </div>
  );
};

export default Setreminderdialog;
