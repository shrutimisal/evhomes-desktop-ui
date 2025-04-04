"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi"; 
import styles from "./leadsdashboardcards.module.css";

const Leaddashboardcards = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dashboard</h2>

      <div className={`${styles.searchContainer} ${filterOpen ? styles.searchShift : ""}`}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <button className={styles.searchButton}>
          <FiSearch size={20} />
        </button>
      </div>

      <div className={`${styles.filterContainer} ${filterOpen ? styles.filterExpanded : ""}`} onClick={toggleFilter}>
        
        {filterOpen && <span className={styles.filterText}>Filter</span>}
        {filterOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </div>
    </div>
  );
};

export default Leaddashboardcards;
