import React from "react";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="top-grid-dash">
        <div className="col">
          <h1>SAFUU Price</h1>
          <p>$206.20</p>
        </div>
        <div className="col">
          <h1>Market Cap</h1>
          <p>$185,602,015</p>
        </div>
        <div className="col">
          <h1>Circulating Supply</h1>
          <p>900,070.1</p>
        </div>
        <div className="col">
          <h1>Backed Liquidity</h1>
          <p>100%</p>
        </div>
        <div className="col">
          <h1>Next Rebase</h1>
          <p>00:08:05</p>
        </div>
        <div className="col">
          <h1>Total Supply</h1>
          <p>1,073,932.47</p>
        </div>
      </div>
      <div className="row-col">
        <div className="col">
          <h1>SAFUU Price</h1>
          <p>$206.20</p>
        </div>
        <div className="col">
          <h1>Market Value of Treasury Asset</h1>
          <p>$5,669,400</p>
        </div>
      </div>
      <div className="row-col">
        <div className="col">
          <h1>Pool Value</h1>
          <p>$23,682,528</p>
        </div>
        <div className="col">
          <h1>SAFUU Insurance Fund Value</h1>
          <p>$2,178,652</p>
        </div>
      </div>
      <div className="row-col">
        <div className="col">
          <h1># Value of FirePit</h1>
          <p>173,862.36 SAFUU</p>
        </div>
        <div className="col">
          <h1>$ Value of FirePit</h1>
          <p>$35,851,880</p>
        </div>
        <div className="col">
          <h1>% FirePit : Supply</h1>
          <p>16.18%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
