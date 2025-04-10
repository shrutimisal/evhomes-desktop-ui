import React, { useEffect, useState, useRef } from "react";
import styles from "./assigndialog.module.css";

const Updatestatusdialog = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const timeInputRef = useRef(null);
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

  const formatDisplayDateTime = () => {
    if (!selectedDate || !selectedTime) return "";
    const dateObj = new Date(`${selectedDate}T${selectedTime}`);
    return dateObj
      .toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .replace(",", " at");
  };

  return (
    <div className={styles.dialogOverlay} onClick={handleClose}>
      <div
        className={`${styles.dialogContainer} ${
          isClosing ? styles.slideOut : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}></button>
        <h2>Update Status</h2>
        <div className={styles.formControl}>
          <label htmlFor="select">Lead Stage</label>
          <select name="select" id="select">
            <option value="opt1">First Call</option>
            <option value="opt2">Follow Up</option>
            <option value="opt3">Virtual Meeting</option>
          </select>
        </div>
        <div className={styles.formControl}>
          <label>Reminder Date & Time</label>
          <div>
            <div className={styles.formControl}>
              <label>Select Reminder Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setTimeout(() => {
                    timeInputRef.current?.focus();
                  }, 100);
                }}
              />
            </div>
            <div className={styles.formControl}>
              <label>Select Reminder Time</label>
              <input
                type="time"
                value={selectedTime}
                ref={timeInputRef}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </div>
          </div>
          {selectedDate && selectedTime && <div>{formatDisplayDateTime()}</div>}
        </div>
        <div className={styles.formControl}>
          <label htmlFor="text">Feedback</label>
          <textarea name="text" rows="5" />
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.submitButton}>Submit</button>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updatestatusdialog;
