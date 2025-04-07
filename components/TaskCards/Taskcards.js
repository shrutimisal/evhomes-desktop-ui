import React from "react";
import styles from "./taskcards.module.css";

const Taskcards = () => {
  const tasks = [
    { name: "Client Name", remark: "Remark……!" },
    { name: "Client Name", remark: "Remark……!" },
    { name: "Client Name", remark: "Remark……!" },
    { name: "Client Name", remark: "Remark……!" },
    { name: "Client Name", remark: "Remark……!" },
    { name: "Client Name", remark: "Remark……!" },
    { name: "Client Name", remark: "Remark……!" },
    { name: "Client Name", remark: "Remark……!" },
  ];

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Upcoming Tasks</h2>
      <div className={styles.taskContainer}>
        <div className={styles.taskList}>
          {tasks.map((task, index) => (
            <div key={index} className={styles.taskCard}>
              <img
                src="/profile.jpg"
                alt="Profile"
                className={styles.profilePic}
              />
              <div className={styles.taskInfo}>
                <p className={styles.clientName}>{task.name}</p>
                <p className={styles.remark}>{task.remark}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Taskcards;
