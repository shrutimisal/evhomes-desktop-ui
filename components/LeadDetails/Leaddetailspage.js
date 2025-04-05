import React from "react";
import styles from "./leaddetailspage.module.css";
import { FaTasks, FaBell, FaCalendarAlt, FaRocket } from "react-icons/fa";

const Leaddetailspage = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.detailsContainer}>
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
      {/* four Buttons  */}

      <div className={styles.buttonColumn}>
        <button className={styles.actionButton}>
          <FaTasks className={styles.icon} />
          Assign Task
        </button>
        <button className={styles.actionButton}>
          <FaBell className={styles.icon} />
          Send Notification
        </button>
        <button className={styles.actionButton}>
          <FaCalendarAlt className={styles.icon} />
          Schedule Meeting
        </button>
        <button className={styles.actionButton}>
          <FaRocket className={styles.icon} />
          Lead Running Status
        </button>
      </div>
    </div>
  );
};

export default Leaddetailspage;
