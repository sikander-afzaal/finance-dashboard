import React, { useState, useEffect } from "react";
import "./Mint.css";
import AnimatedPage from "../../Components/AnimatedPage";
import logo from "../../Assets/logo.png";
function Mint() {
  const [array, setArray] = useState([1]);
  const clickHandlerMinus = (e) => {
    if (array.length <= 10 && array.length >= 0) {
      const copy = [...array];
      copy.splice(0, 1);
      setArray(copy);
    }
  };
  const clickHandlerPlus = (e) => {
    if (array.length <= 9 && array.length >= 0) {
      setArray((prev) => {
        return [...prev, prev.length + 1];
      });
    }
  };
  return (
    <AnimatedPage>
      <div className="mint">
        <div className="left-mint">
          <h1>Mint your killer whale</h1>
          <p>2500 “killer whales”</p>
          <p>1 of 3 collections released over the next 12 months</p>
          <p>
            Collect one of each to unlock your pass into our play to earn game
          </p>
          <ul>
            <li>20% reflections to holders </li>
            <li>20% charity donation</li>
            <li>15% treasury</li>
            <li>30% team</li>
            <li>15% game rewards</li>
          </ul>
          <h1>NFT Pricing</h1>
          <p>Based on a bonding curve</p>
          <ul>
            <li>0-50 # Marketing</li>
            <li>50-100 # 0.1 bnb</li>
            <li>100-200 # 0.2 bnb</li>
            <li>200-300 # 0.3 bnb</li>
            <li>300-400 # 0.4 bnb</li>
            <li>400-500 # 0.5 bnb</li>
            <li>500-750 # 0.75 bnb</li>
            <li> 750-1000 # 1 bnb</li>
          </ul>
          <div className="additon-div">
            <div className="calc">
              <p onClick={clickHandlerMinus} className="minus">
                -
              </p>
              <p className="number">{array.length}</p>
              <p onClick={clickHandlerPlus} className="plus">
                +
              </p>
            </div>
          </div>
          <button className="mint-btn">Mint</button>
        </div>
        <div className="right-mint">
          <img src={logo} alt="" />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Mint;
