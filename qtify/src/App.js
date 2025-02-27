import fetchAlbums from './api/api';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';

function App() {

  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData = async (title,key) => {
        try {
          const dataFetch = await fetchAlbums(title); 
          setData((prevState)=>{
            console.log("data")
            console.log({...prevState,[key]:dataFetch})
            return {...prevState,[key]:dataFetch};
          });
          console.log("app");
          console.log(dataFetch)
          console.log(data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      
  
      fetchData("Top Albums","topAlbums");
      fetchData("New Albums","newAlbums");
      fetchData("Songs","songs");
      fetchData("genres","genres");

      
},[])

console.log("ll");
console.log(data.topAlbums)

const{topAlbums=[],newAlbums=[],songs=[],genres=[]}=data;

  return (
    <div className="App">
      <Navbar
      />
      <Outlet context={{data:{topAlbums,newAlbums,songs,genres}}}/>
    </div>
  );
}

export default App;
