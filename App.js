import React from "react";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Ott from "./Components/Ott";
import Film from "./Components/Film";
import NavBar from "./Components/Navbar";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div >
     
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/ott' element={<Ott />}></Route>
          <Route path='/film' element={<Film />}></Route>
        </Routes>
    </div>
  );
}

export default App;