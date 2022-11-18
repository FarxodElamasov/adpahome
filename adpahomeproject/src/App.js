import React from 'react'
import Drawer from './components/Drawer/Drawer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Create from "../src/components/Create/Create"
import Product from "../src/components/Product/Product"
import Users from "../src/components/Users/Users"
import EditPage from "../src/components/EditPage/EditPage"

export default function App() {
  return (
    <>
      <Router>
        <Drawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productcreate" element={<Create />} />
          <Route path="/list" element={<Product />} />
          <Route path="/users" element={<Users />} />
          <Route path="/editpage" element={<EditPage />} />
        </Routes>
      </Router>
    </>
  );
}
