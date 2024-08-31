import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

// Define custom components

const App = () => {
  return (
    <div className="bg-zinc-900">
      <Navbar/>
      
        <Element name="home" id="home">
          <Hero />
        </Element>

        <Element name="about" id="about" className="section">
          <About />
        </Element>

        <Element name="projects" id="project" className="section">
          <Project />
        </Element>
    </div>
  );
};

export default App;
