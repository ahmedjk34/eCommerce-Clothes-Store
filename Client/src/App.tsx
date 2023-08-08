import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/pages/global-rules.scss";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Men from "./components/Men";
import Women from "./components/Women";
import About from "./components/About";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Men" element={<Men />}></Route>
        <Route path="/Women" element={<Women />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
