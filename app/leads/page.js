import { FilterCard } from "@/components/FilterCard/Filtercard";
import Leadlistpage from "@/components/LeadListPage/Leadlistpage";
import Leaddashboardcards from "@/components/LeadsDashboardCards/Leaddashboardcards";
import React from "react";
import styles from "./leads.module.css";
import Leaddetailspage from "@/components/LeadDetails/Leaddetailspage";

const LeadsPage = () => {
  return (
    <div className={styles.fullContainer}>
      <Leaddashboardcards />

      <div className={styles.listDetailsContainer}>
        <div className={styles.listContainer}><Leadlistpage /></div>
        <Leaddetailspage/>
      </div>
    </div>
  );
};

export default LeadsPage;
