"use client";
import React from "react";
import styles from "./navbar.module.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigateTo("/")}>
        Logo
      </div>
      <ul className={styles.navLinks}>
        <li
          className={pathname === "/homepage" ? styles.active : ""}
          onClick={() => navigateTo("/homepage")}
        >
          Home
        </li>
        <li
          className={pathname === "/leads" ? styles.active : ""}
          onClick={() => navigateTo("/leads")}
        >
          Leads
        </li>
        <li
          className={pathname === "/tasks" ? styles.active : ""}
          onClick={() => navigateTo("/tasks")}
        >
          Tasks
        </li>
        <li
          className={pathname === "/visits" ? styles.active : ""}
          onClick={() => navigateTo("/visits")}
        >
          Visits
        </li>
        <li
          className={pathname === "/attendance" ? styles.active : ""}
          onClick={() => navigateTo("/attendance")}
        >
          Attendance
        </li>
      </ul>
      <div className={styles.icons}>
        <FaBell className={styles.icon} />
        <FaUserCircle className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
