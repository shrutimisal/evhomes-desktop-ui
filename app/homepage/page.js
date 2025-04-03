import Leadcards from "@/components/LeadCards/Leadcards";
import Linegraphcard from "@/components/LineGraph/Linegraphcard";
import Navbar from "@/components/NavBar/Navbar";
import Piegraphcard from "@/components/PieGraph/Piegraphcard";
import Quickaccessoptions from "@/components/QuickAccess/Quickaccessoptions";
import styles from "./homepage.module.css";
import React from "react";
import Extraoptions from "@/components/ExtraOptions/Extraoptions";
import Taskcards from "@/components/TaskCards/Taskcards";
import Remindercard from "@/components/ReminderCard/Remindercard";

const HomePage = () => {
  return (
    <div>
      {/* <Quickaccessoptions/> */}
      {/* <Extraoptions/> */}
      <Leadcards />
      <div className={styles.lineTaskContainer}>
        <Linegraphcard />
        <Taskcards />
      </div>
      <div className={styles.ReminPieContainer}>
        <Remindercard />
        <Piegraphcard />
      </div>
    </div>
  );
};

export default HomePage;
