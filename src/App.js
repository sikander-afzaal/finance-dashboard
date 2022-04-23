import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Layout/SideBar/Sidebar";
import Header from "./Layout/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Account from "./Pages/Account/Account";
import Calculator from "./Pages/Calculator/Calculator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [open, setOpen] = useState(false);
  const openHeader = (val) => {
    setOpen(val);
  };

  return (
    <div className="App">
      <Router>
        <Header func={openHeader} />
        <div className="bottom-App">
          <Sidebar func={openHeader} open={open} />
          <div className="right-div">
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/calculator" element={<Calculator />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
