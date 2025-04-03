import React from "react";
import styles from "./leadlistpage.module.css";

const LeadCard = ({ lead }) => {
    return (
      <div className={styles.leadCard}>
        <div className={styles.leadHeader}>
          <span className={styles.clientStatus}>{lead.clientStatus}</span>
        </div>
        <div className={styles.leadInfo}>
          <div className={styles.clientIcon}>
            {lead.clientName.charAt(0).toUpperCase()}
          </div>
          <h4>
            {lead.clientName.length > 15
              ? lead.clientName.substring(0, 15) + "..."
              : lead.clientName}
          </h4>
        </div>
        <div className={styles.leadDetails}>
          <p>
            <strong>Phone:</strong> {lead.clientPhone}
          </p>
          <p>
            <strong>Assign Date:</strong> {lead.assignDate}
          </p>
          <p>
            <strong>Visit Deadline:</strong> {lead.visitDeadline}
          </p>
          <p>
            <strong>Channel Partner:</strong> {lead.channelPartner}
          </p>
          <p>
            <strong>Data Analyser:</strong> {lead.dataAnalyser}
          </p>
          <p>
            <strong>Team Leader:</strong> {lead.teamLeader}
          </p>
        </div>
        <button className={styles.leadButton}>Lead Details</button>
      </div>
    );
  };
  

const Leadlistpage = () => {
  const leads = [
    {
      clientName: "Dummy Dummmmmmmm",
      clientPhone: "1234567899",
      assignDate: "01-01-0001",
      visitDeadline: "02-02-0002",
      channelPartner: "ABC",
      dataAnalyser: "XYZ",
      teamLeader: "PQR",
      clientStatus: "Pending",
    },
    {
      clientName: "Dummy Dummyyyy",
      clientPhone: "1234567899",
      assignDate: "01-01-0001",
      visitDeadline: "02-02-0002",
      channelPartner: "ABC",
      dataAnalyser: "XYZ",
      teamLeader: "PQR",
      clientStatus: "Pending",
    },
    {
      clientName: "Dummy Dummyyyy",
      clientPhone: "1234567899",
      assignDate: "01-01-0001",
      visitDeadline: "02-02-0002",
      channelPartner: "ABC",
      dataAnalyser: "XYZ",
      teamLeader: "PQR",
      clientStatus: "Pending",
    },
    {
      clientName: "Dummy Dummyyyy",
      clientPhone: "1234567899",
      assignDate: "01-01-0001",
      visitDeadline: "02-02-0002",
      channelPartner: "ABC",
      dataAnalyser: "XYZ",
      teamLeader: "PQR",
      clientStatus: "Pending",
    },
    {
      clientName: "Dummy Dummyyyy",
      clientPhone: "1234567899",
      assignDate: "01-01-0001",
      visitDeadline: "02-02-0002",
      channelPartner: "ABC",
      dataAnalyser: "XYZ",
      teamLeader: "PQR",
      clientStatus: "Pending",
    },
  ];

  return (
    <div className={styles.leadListContainer}>
      {leads.map((lead, index) => (
        <LeadCard key={index} lead={lead} />
      ))}
    </div>
  );
};

export default Leadlistpage;
