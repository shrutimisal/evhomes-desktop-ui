"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./piegraphcard.module.css";

const data1 = [
  { name: "Completed", value: 400 },
  { name: "Pending", value: 300 },
  { name: "Cancell", value: 300 },
];

const data2 = [
  { name: "Completed", value: 400 },
  { name: "Pending", value: 300 },
  { name: "Cancell", value: 300 },
];

const COLORS = ["#0088FE", "#FFBB28", "#FF8042"];

const Piegraphcard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width={250} height={250}>
          <PieChart>
            <Pie
              data={data1}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width={250} height={250}>
          <PieChart>
            <Pie
              data={data2}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#82ca9d"
              paddingAngle={5}
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Piegraphcard;
