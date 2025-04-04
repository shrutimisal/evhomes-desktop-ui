import { FilterCard } from "@/components/FilterCard/Filtercard";
import Leadlistpage from "@/components/LeadListPage/Leadlistpage";
import Leaddashboardcards from "@/components/LeadsDashboardCards/Leaddashboardcards";
import React from "react";
import styles from "./leads.module.css";

const LeadsPage = () => {
  return (
    <div>
      <Leaddashboardcards />

      <div className={styles.leadContainer}>
        <Leadlistpage />
      </div>
    </div>
  );
};

export default LeadsPage;
