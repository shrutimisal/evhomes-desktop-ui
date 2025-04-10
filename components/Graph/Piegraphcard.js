"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./piegraphcard.module.css";

const data1 = [
  { name: "Completed", value: 400 },
  { name: "Pending", value: 100 },
  {},
];

const data2 = [
  { name: "Completed", value: 400 },
  { name: "Pending", value: 300 },
  { name: "Cancell", value: 300 },
];

// const COLORS = ["#4F959D", "#98D2C0", ];


const Piegraphcard = ({Healine, percentage, status, lableone, labletwo,valueone,valuetwo, colors}) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.chartWrapper}>
        <div className={styles.header} >{Healine}</div>
          <ResponsiveContainer width={230} height={210}>
            <PieChart>
              <Pie
                data={data1}
                cx="50%"
                cy="50%"
                innerRadius={75}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"

              >
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
              <circle cx="50%" cy="50%"  r="28%" fill="#333" />
              <text x="50%"    y="32%"   textAnchor="middle"  dominantBaseline="middle"    fill="white" fontSize={14}  >
               <tspan fontSize={10}>{status} </tspan>
               <tspan  x="50%" dy="1.0em"  fontSize={20} fill="#ccc"  >{percentage}</tspan>
               <tspan dy="1.6em" fill="grey" fontSize={12}   x="50%">Total</tspan>
               <tspan dy="2.0em" fill="#4F959D" fontSize={10}   x="50%">{lableone} : {valueone}</tspan>
               <tspan dy="1.2em" fill="#98D2C0" fontSize={10}   x="50%">{labletwo} : {valuetwo}</tspan>
               
           
            </text>
            </PieChart>
          
          </ResponsiveContainer>
        </div>

        {/* <div className={styles.chartWrapper}>
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data2}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
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

        <div className={styles.chartWrapper}>
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data1}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
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
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data2}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
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
        </div> */}
      </div>
    </div>
  );
};

export default Piegraphcard;
