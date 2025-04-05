import React from "react";
import styles from "../AssignTaskDialog/assigndialog.module.css";
import style from "./sendnotificationdialog.module.css";

const SendNotificationDialog = ({ onClose }) => {
  return (
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div
        className={styles.dialogContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Send Notification</h2>
        <div className={styles.formControl}>
          <label htmlFor="text">Enter Title</label>
          <input name="text" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="text">Type your message here ...</label>
          <textarea name="text" rows="5"/>
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
