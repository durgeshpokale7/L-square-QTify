import { Button } from "@mui/material";
import styles from "./Section.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';
import CustomCard from "../card/card";
import fetchAlbum from "../../api/api"

function Section( title ) {

    const[data,setData]=useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const dataFetch = await fetchAlbum(title); // Wait for data
              setData(dataFetch); // Update state
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
    },[])
    
    

  return (
    <div className={styles.containerDiv}>
      <div className={styles.header}>
        <h3 className={styles.title}>Top Albums</h3>
        <Button className={styles.buttonShow}>Collapse</Button>
      </div>
      <div className="grid">
        <Grid container spacing={2} justifyContent="center">
      
      {data.map(({description,follows,id,image,slug,songs,title})=>(
        <Grid item xs={12} sm={6} md={4} lg={1.7}>
            <CustomCard follows={follows} id={id} image={image} title={title} />
          </Grid>
      ))}
       </Grid>
       </div>
      
      
    </div>
  );
}

export default Section;
