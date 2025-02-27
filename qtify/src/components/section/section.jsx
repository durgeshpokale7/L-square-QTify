import { Button } from "@mui/material";
import styles from "./section.module.css";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import CustomCard from "../card/card";
import Carsosel from "../carousel/carosuel";
import MuiTabsExample from "../tabs/tabs";

function Section({data,title,genres}) {
    console.log("section")
    console.log(genres)
    
    const [carouselState,setCarouselSate]=useState(true);

    const handdleButton=()=>{
      setCarouselSate((prevState)=>!prevState);
      
    }
    
    

  return (

    <div className={styles.containerDiv}>
      <div className={styles.header}>
        <h3 className={styles.title} title={title}>{title}</h3>
        {genres?(null):<Button className={styles.buttonShow} onClick={handdleButton}>{carouselState?"Show all":"Collapse"}</Button>}
        
      </div>
      {genres?(
        <MuiTabsExample
         genres={genres}
         songs={data}
         />
      ):(
        !carouselState?(<div className="grid">
            <Grid container spacing={2} justifyContent="center">
          
          {data.map(({description,follows,id,image,slug,songs,title})=>(
            <div title="Strident Analyst">
              <Grid item xs={12} sm={6} md={4} lg={1.7} key={id} title="Strident Analyst" >
                <CustomCard follows={follows} id={id} image={image} title={title} />
              </Grid>

            </div>
            
              
          ))}
           </Grid>
           </div>):(
            <>
             <Carsosel data={data}/>
             
            </>
             
            )

      )}
      
    </div>
  
  );
}

export default Section;
