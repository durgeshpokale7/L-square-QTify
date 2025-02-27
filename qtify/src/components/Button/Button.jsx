import React from "react";  
import { Button as MuiButton} from "@mui/material";
import styles from "./Button.module.css"

function Button({children}){
    return(
        <MuiButton
        className={styles.button}
        variant="contained"
        >
            {children}
        </MuiButton>
    )
}

export default Button;