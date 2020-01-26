import React from "react";
import logo from "./logo.svg";

import "./App.css";
import "./libs/general-components.css";

import Header from "./components/header/";
import NavBar from "./components/navbar/";
import AboutMe from "./components/aboutme";
import News from "./components/news";
import Footer from "./components/footer";
import Blog from "./components/blog";

import Contact from "./components/contact";

function App() {
  return (
    <div className="app">
      <NavBar />

      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
