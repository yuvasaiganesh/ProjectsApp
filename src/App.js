import { Routes, Route } from "react-router-dom";

import Contact from "./components/Contact";

import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";


import "./App.css"

function App() {
  return (
    <Routes>
      
     
        <Route exact path="/" element={<Home />} />
      
       
     
        <Route exact path="/about" element={<About/>} />
     

     
        <Route exact path="/projects" element={<Projects/>} />
      

     
        <Route exact path="/contacts" element={<Contact/>} />
      
     

    </Routes>
  );
}

export default App;