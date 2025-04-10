"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./taskdetail.module.css";
import { FaTasks, FaBell } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import useBodyScrollLock from "../useBodyScrollLock";
import Taskhistory from "./Taskhistory";
import Updatestatusdialog from "../Dialogs/Updatestatusdialog";
import Setreminderdialog from "../Dialogs/Setreminderdialog";

const Taskdetailspage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showNotificationDialog, setShowNotificationDialog] = useState(false);

  const dropdownRef = useRef(null);

  const isAnyDialogOpen =
    showDialog || showNotificationDialog;
    useBodyScrollLock(isAnyDialogOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAssignClick = () => {
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleNotificationClick = () => {
    setShowNotificationDialog(true);
  };
  const closeNotificationDialog = () => {
    setShowNotificationDialog(false);
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.leadHistoryContainer}>
        <div className={styles.detailsContainer}>
          <div className={styles.optionsWrapper} ref={dropdownRef}>
            <div
              className={styles.options}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <BsThreeDotsVertical />
            </div>

            {showDropdown && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownItem}>Transfer Task</div>
              </div>
            )}
          </div>

          <div className={styles.infoSection}>
            <div className={styles.leftSection}>
              <div className={styles.avatar}>D</div>
              <div className={styles.name}>Dummy Dummy</div>
              <div className={styles.phone}>+91 1334567899</div>
            </div>

            <div className={styles.middleSection}>
              <p>
                <span className={styles.label}>Task:</span>{" "}
                <span className={styles.value}>Follow Up</span>
              </p>
              <p>
                <span className={styles.label}>Description:</span>{" "}
                <span className={styles.value}>NA</span>
              </p>
              <p>
                <span className={styles.label}>Deadline:</span>{" "}
                <span className={`${styles.value} ${styles.danger}`}>
                  06 Apr 2025
                </span>
              </p>
              <p>
                <span className={styles.label}>Assign To:</span>{" "}
                <span className={styles.value}>Dummy</span>
              </p>
              <p>
                <span className={styles.label}>Assign By:</span>{" "}
                <span className={styles.value}>Dummy</span>
              </p>
            </div>

            <div className={styles.rightSection}>
              <p>
                <span className={styles.label}>Email:</span>{" "}
                <span className={styles.value}>NA</span>
              </p>
              <p>
                <span className={styles.label}>Project:</span>{" "}
                <span className={styles.value}>
                  EV23 Malibu West, EV Heart City , EV 9 Square
                </span>
              </p>
              <p>
                <span className={styles.label}>Requiremnet:</span>{" "}
                <span className={styles.value}>1BHK , 2BHK, 3BHK, 4BHK</span>
              </p>
              <p>
                <span className={styles.label}>Channel Partner:</span>{" "}
                <span className={styles.value}>NA</span>
              </p>

              <div className={styles.options}></div>
            </div>
          </div>
        </div>

        <Taskhistory />
      </div>
      {/* two Buttons  */}
      <div className={styles.buttonColumn}>
        <button className={styles.actionButton} onClick={handleAssignClick}>
          <FaTasks className={styles.icon} />
          Update Status
        </button>
        {showDialog && <Updatestatusdialog onClose={closeDialog} />}

        <button
          className={styles.actionButton}
          onClick={handleNotificationClick}
        >
          <FaBell className={styles.icon} />
          Set Reminder
        </button>
        {showNotificationDialog && (
          <Setreminderdialog onClose={closeNotificationDialog} />
        )}
      </div>
    </div>
  );
};

export default Taskdetailspage;
