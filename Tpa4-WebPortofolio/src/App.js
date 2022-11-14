import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Skills from "./routes/Skills";
import Blog from "./routes/Blog";

import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/home" element={<Home />} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="/skills" element={<Skills />} /> 
      <Route path="/blog" element={<Blog />} /> 
      <Route />  
    
    </Routes>  
    </>

  );
}

export default App;
