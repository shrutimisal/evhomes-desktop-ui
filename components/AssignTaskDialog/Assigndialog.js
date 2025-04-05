import React from "react";
import styles from "./assigndialog.module.css";

const Assigndialog = ({ onClose }) => {
  return (
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div
        className={styles.dialogContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}></button>
        <h2>Assign Task</h2>
        <div className={styles.formControl}>
          <label htmlFor="select">Subject</label>
          <select name="select" id="select">
            <option value="opt1">First Call</option>
            <option value="opt2">Follow Up</option>
          </select>
        </div>
        <div className={styles.formControl}>
          <label htmlFor="text">Remarks</label>
          <textarea name="text" rows="5" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="assignee">Assign To</label>
          <select name="assignee" id="assignee">
            <option value="assignee1">First</option>
            <option value="assignee2">Second</option>
          </select>
        </div>
        <div className={styles.formControl}>
          <label htmlFor="deadline">Deadline Date</label>
          <div className={styles.dateInput}>
            <input type="date" id="deadline" name="deadline" />
            <span className={styles.calendarIcon}></span>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.submitButton}>Submit</button>
          <button className={styles.cancelButton} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Assigndialog;
