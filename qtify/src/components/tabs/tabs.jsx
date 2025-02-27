import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import Carousel from '../carousel/carosuel';
import { useEffect } from "react";
import styles from "./tabs.module.css";

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const MuiTabsExample = ({genres,songs}) => {
  
  const [value, setValue] = useState(0);
  const[data,setData]=useState([]);
  const[originalData,setOriginalData]=useState([]);
  const [filter,setFilter]=useState([{key:"all",label:"All"}]);
  

  useEffect(()=>{
    const fetchData = async () => {
        try {
          setData(songs);
          setOriginalData(songs)
          setFilter([
            { key: "all", label: "All" },
            ...genres.data.map((genre) => ({ key: genre.key, label: genre.label })),
          ]);
          console.log("filter")
          console.log(filter);
       
    
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      
  
      fetchData();
},[genres.data, songs])


const handleChange = (event, newValue) => {
  setValue(newValue);
  const selectedGenre = filter[newValue].label;
  if (selectedGenre === "All") {
    setData(originalData);
  } else {
    setData(originalData.filter((song) => song.genre.label === selectedGenre));
  }
  
};

  return (
    <>
    <Tabs 
       value={value}
       onChange={handleChange}
       textColor="white"
      
       sx={{ backgroundColor: 'black',color:"white" }}
      
      >
        {filter.map((ele,idx)=>(
          <Tab
          key={idx}
          label={ele.label}
          />
        ))}
      </Tabs>
     
     
          {filter.map((ele, idx) => (
          <TabPanel 
          sx={{Padding:0}}
          key={idx} value={value} index={idx}>
            <Carousel data={data} />
        
          </TabPanel>
    ))}
    </>
      

      
        
      
      
  
  );
};

export default MuiTabsExample;
