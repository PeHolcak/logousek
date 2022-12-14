import React from "react";
import styles from "./styles.module.css";

function SidebarItem({ name, icon, title, onClick }) {
  return (
    <li className={styles.welcomePageNavListItem}>
      <a onClick={onClick} className={styles.welcomePageNavListItemLink}>
        <i className={["material-icons", styles.welcomePageNavListItemIcon].join(" ")}>{icon}</i>
        <span>{title}</span>
      </a>
    </li>
  );
}

export default SidebarItem;
