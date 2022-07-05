import { Link, Outlet, useLocation } from "react-router-dom";
import { ReactComponent as StarDB } from "../assets/StarDB.svg";
import { ReactComponent as StarMenu } from "../assets/menu.svg";
import { ReactComponent as CloseMenu } from "../assets/close.svg";
import styles from "./styles.module.css";
import React, { useState } from "react";

  

function Pages() {
  const { pathname } = useLocation();
  const [isActive, setActive] = useState("");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Link to="/">
          <StarDB />
        </Link>
        <div className={styles.navi}>
          <div className={pathname.includes("/starships") && styles.active}>
            <Link className={styles.naviElement} to="/starships">Starships</Link>
          </div>
        </div>
        <div className={styles.mobNavi}  onClick={ToggleClass}>
          <StarMenu />
        </div>
        
      </header>
      {/* MobileMenu */}
      <div className={isActive ? styles.showed : null}>
        <div className={styles.mobMenu} >
          <header className={styles.header}>
            <Link to="/" onClick={ToggleClass}>
              <StarDB />
            </Link>
            <div className={styles.mobNavi}>
              <CloseMenu onClick={ToggleClass} />
            </div>
          
          </header>
          <div className={styles.mobMenuContent}>
            <div className={pathname.includes("/starships") && styles.active} onClick={ToggleClass}>
              <Link className={styles.naviElement} to="/starships">Starships</Link>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Pages;
