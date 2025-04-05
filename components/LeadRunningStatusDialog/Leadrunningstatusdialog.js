import React from 'react';
import styles from "../AssignTaskDialog/assigndialog.module.css";

const Leadrunningstatusdialog = ({onClose}) => {
    return (
        <div className={styles.dialogOverlay} onClick={onClose}>
          <div
            className={styles.dialogContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose}></button>
            <h2>Lead Running Status</h2>
          </div>
        </div>
      );
};

export default Leadrunningstatusdialog