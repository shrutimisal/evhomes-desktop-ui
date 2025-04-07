import React, { useEffect, useState } from "react";
import styles from "../AssignTaskDialog/assigndialog.module.css";
import style from "./sendnotificationdialog.module.css";

const SendNotificationDialog = ({ onClose }) => {
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
        <h2>Send Notification</h2>
        <div className={styles.formControl}>
          <label htmlFor="text">Enter Title</label>
          <input name="text" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="text">Type your message here ...</label>
          <textarea name="text" rows="5" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="text">Enter Template</label>
          <input name="text" />
        </div>

        <button className={style.Button}>Send Notification</button>
      </div>
    </div>
  );
};

export default SendNotificationDialog;
