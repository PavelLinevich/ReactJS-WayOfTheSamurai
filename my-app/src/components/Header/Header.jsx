import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <img
        className={styles.header_logo}
        src="https://assets.localizecdn.com/cdn-cgi/image/fit=scale-down,format=auto,metadata=none,width=1200/readme-files/320345b-React_Logo_256x256.png"
        alt="logo-react"
      ></img>
    </header>
  );
}

export default Header;
