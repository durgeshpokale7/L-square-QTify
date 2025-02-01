// import logo from './logo.svg';
import './App.css';
// import { Button, Card } from '@mui/material';
import Navbar from "./components/navbar/navbar";
// import Hero from "./components/Hero/Hero"
import CustomCard from "./components/card/card"
import Section from './components/Sections/Section';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
      <Navbar/>
      {/* <Hero/> */}
      {/* <CustomCard/> */}
      <Section
      title={"Top Albums"}
      />
      </header>
    </div>
  );
}

export default App;
