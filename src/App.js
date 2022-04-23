import "./App.css";
import React, { useState } from "react";
import Sidebar from "./Layout/SideBar/Sidebar";
import Header from "./Layout/Header/Header";
function App() {
  const [open, setOpen] = useState(false);
  const openHeader = (val) => {
    setOpen(val);
  };
  return (
    <div className="App">
      <Header func={openHeader} />
      <div className="bottom-App">
        <Sidebar func={openHeader} open={open} />
        <div className="right-div"></div>
      </div>
    </div>
  );
}

export default App;
