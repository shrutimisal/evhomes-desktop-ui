"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./linegraphcard.module.css";

const data = [
  { month: "Mar", leads: 12000 },
  { month: "Apr", leads: 18000 },
  { month: "May", leads: 15000 },
  { month: "Jun", leads: 22000 },
  { month: "Jul", leads: 17000 },
  { month: "Aug", leads: 25000 },
  { month: "Sep", leads: 27000 },
  { month: "Oct", leads: 28000 },
  { month: "Nov", leads: 30000 },
];

const Linegraphcard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Total Leads</h3>
      <div className={styles.linegraphContainer}>
      <ResponsiveContainer width={700} height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="leads" stroke="#007bff" strokeWidth={2} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Linegraphcard;
