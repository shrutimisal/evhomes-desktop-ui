import Leadcards from "@/components/LeadCards/Leadcards";
import Linegraphcard from "@/components/Graph/Linegraphcard";
import Navbar from "@/components/NavBar/Navbar";
import Piegraphcard from "@/components/Graph/Piegraphcard";
import Quickaccessoptions from "@/components/QuickAccess/Quickaccessoptions";
import styles from "./homepage.module.css";
import React from "react";
import Extraoptions from "@/components/ExtraOptions/Extraoptions";
import Taskcards from "@/components/TaskCards/Taskcards";
import Remindercard from "@/components/ReminderCard/Remindercard";

const HomePage = () => {
  return (
    <div>
      <Leadcards />
      {/* <Extraoptions /> */}
      <div className={styles.lineTaskContainer}>
        <Linegraphcard />
        <Taskcards />
        <Extraoptions/>
      </div>
      <div className={styles.ReminPieContainer}>
        <Remindercard />
        <Piegraphcard />
      </div>
    </div>
  );
};

export default HomePage;
