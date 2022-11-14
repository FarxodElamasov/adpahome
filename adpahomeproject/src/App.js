import React from 'react'
import Drawer from './components/Drawer/Drawer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"

export default function App() {
  return (
    <>

      <Router>

        <Drawer />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
