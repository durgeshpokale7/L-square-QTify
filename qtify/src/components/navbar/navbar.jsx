import React from "react";
// import { Link } from "react-router-dom";
import Button from "../Button/Button";
// import { Button } from "@mui/material";
import Logo from "../Logo/logo";
// import Search from "../Search/search";
import styles from "./Navbar.module.css";

function Navbar() {
  
  return (
    <nav className={styles.navbar}>
      
        <Logo />

      {/* </Link> */}
      {/* <Search
        placeholder="Search a song of your choice"
        // searchData={searchData}

      /> */}
      <Button>Give Feedback</Button>
      
          
    </nav>
  );
}

export default Navbar;
