import React from "react";
import styles from "./leadsdashboardcards.module.css";

const Leaddashboardcards = () => {
  return (
    <div className={styles.fullContainer}>
      <h2 className={styles.title}>Dashboard</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <h4>Leads</h4>
          <h2>16689</h2>
        </div>
        <div className={styles.card}>
          <h4>Visit 1</h4>
          <h2>148</h2>
        </div>
        <div className={styles.card}>
          <h4>Visit 2</h4>
          <h2>40</h2>
        </div>
        <div className={styles.card}>
          <h4>Booking</h4>
          <h2>136373</h2>
        </div>
        <div className={styles.card}>
          <h4>Pending</h4>
          <h2>136373</h2>
        </div>
      </div>
    </div>
  );
};

export default Leaddashboardcards;
