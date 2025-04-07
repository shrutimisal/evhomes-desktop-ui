"use client";
import React, { useState } from "react";
import styles from "./leaddetailspage.module.css";
import { FaTasks, FaBell, FaCalendarAlt, FaRocket } from "react-icons/fa";
import Assigndialog from "../AssignTaskDialog/Assigndialog";
import Sendnotificationdialog from "../SendNotificationDialog/Sendnotificationdialog";
import Schedulemeetingdialog from "../ScheduleMeetingDialog/Schedulemeetingdialog";
import Leadrunningstatusdialog from "../LeadRunningStatusDialog/Leadrunningstatusdialog";
import Leadshistory from "../LeadsHistory/Leadshistory";
import { BsThreeDotsVertical } from 'react-icons/bs';

const Leaddetailspage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showNotificationDialog, setShowNotificationDialog] = useState(false);
  const [showScheduleMeetingDialog, setShowScheduleMeetingDialog] =
    useState(false);
  const [showLeadRunningStatusDialog, setShowLeadRunningStatusDialog] =
    useState(false);

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

  const handleScheduleMeetingClick = () => {
    setShowScheduleMeetingDialog(true);
  };
  const closeScheduleMeeetingDialog = () => {
    setShowScheduleMeetingDialog(false);
  };

  const handleLeadRunningStatusClick = () => {
    setShowLeadRunningStatusDialog(true);
  };
  const closeLeadRunningStatusDialog = () => {
    setShowLeadRunningStatusDialog(false);
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.leadHistoryContainer}>
        <div className={styles.detailsContainer}>
          <div className={styles.options}>
            <BsThreeDotsVertical />
          </div>
          <div className={styles.leftSection}>
            <div className={styles.avatar}>D</div>
            <div className={styles.name}>Dummy Dummy</div>
            <div className={styles.phone}>+91 1334567899</div>
          </div>

          <div className={styles.middleSection}>
            <p>
              <span className={styles.label}>Requirement:</span>{" "}
              <span className={styles.value}>2BHK, 3BHK, 4BHK</span>
            </p>
            <p>
              <span className={styles.label}>Channel Partner:</span>{" "}
              <span className={styles.value}>Balaji Properties</span>
            </p>
            <p>
              <span className={styles.label}>Project:</span>{" "}
              <span className={styles.value}>EV10 Marina Bay</span>
            </p>
            <p>
              <span className={styles.label}>Status:</span>{" "}
              <span className={styles.value}>Visit</span>
            </p>
            <p>
              <span className={styles.label}>Visit Deadline:</span>{" "}
              <span className={`${styles.value} ${styles.danger}`}>
                06 Apr 2025
              </span>
            </p>
            <p>
              <span className={styles.label}>Site Visit Interested:</span>{" "}
              <span className={`${styles.value} ${styles.danger}`}>No</span>
            </p>
          </div>

          <div className={styles.rightSection}>
            <p>
              <span className={styles.label}>Email:</span>{" "}
              <span className={styles.value}>NA</span>
            </p>
            <p>
              <span className={styles.label}>Address:</span>{" "}
              <span className={styles.value}>na</span>
            </p>
            <p>
              <span className={styles.label}>Assigned To:</span>{" "}
              <span className={styles.value}>Dummy Man</span>
            </p>
            <p>
              <span className={styles.label}>Client Status:</span>{" "}
              <span className={styles.value}>NA</span>
            </p>
            <p>
              <span className={styles.label}>Lead Status:</span>{" "}
              <span className={`${styles.value} ${styles.cold}`}>cold</span>
            </p>
            <div className={styles.options}></div>
          </div>
        </div>

        <Leadshistory />
      </div>
      {/* four Buttons  */}
      <div className={styles.buttonColumn}>
        <button className={styles.actionButton} onClick={handleAssignClick}>
          <FaTasks className={styles.icon} />
          Assign Task
        </button>
        {showDialog && <Assigndialog onClose={closeDialog} />}

        <button
          className={styles.actionButton}
          onClick={handleNotificationClick}
        >
          <FaBell className={styles.icon} />
          Send Notification
        </button>
        {showNotificationDialog && (
          <Sendnotificationdialog onClose={closeNotificationDialog} />
        )}

        <button
          className={styles.actionButton}
          onClick={handleScheduleMeetingClick}
        >
          <FaCalendarAlt className={styles.icon} />
          Schedule Meeting
        </button>
        {showScheduleMeetingDialog && (
          <Schedulemeetingdialog onClose={closeScheduleMeeetingDialog} />
        )}

        <button
          className={styles.actionButton}
          onClick={handleLeadRunningStatusClick}
        >
          <FaRocket className={styles.icon} />
          Lead Running Status
        </button>
        {showLeadRunningStatusDialog && (
          <Leadrunningstatusdialog onClose={closeLeadRunningStatusDialog} />
        )}
      </div>
    </div>
  );
};

export default Leaddetailspage;
