import React from "react";
import LogoImage from "../../assests/LogoImage.png"
import styles from "./logo.module.css"

export default function Logo() {
  return <img src={LogoImage} alt="logo"  className={styles.logo} />;
}
