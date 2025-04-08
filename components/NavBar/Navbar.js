"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Profiledialog from "../ProfilePage/Profiledialog";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isProfileOpen,setIsProfileOpen] = useState(false);

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigateTo("/")}>
      <Image
          src="/images/evhomeslogo.png"
          alt="EV Homes Logo"
          width={250}
          height={50}
        />
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
        <button className={styles.moreButton}>
          More<span className={styles.plus}>+</span> 
        </button>
        <FaBell className={styles.icon} />
        <FaUserCircle className={styles.icon} onClick={()=> setIsProfileOpen(true)} />
      </div>

      <Profiledialog isOpen={isProfileOpen} onClose={()=>setIsProfileOpen(false)}/>
    </nav>
  );
};

export default Navbar;
