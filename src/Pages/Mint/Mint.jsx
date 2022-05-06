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
        <img src={logo} alt="" className="logo-mint" />
        <h1>Mint an ORCA</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          delectus placeat ad vel nemo magnam unde temporibus impedit ipsum
          possimus veniam, commodi error hic consectetur aperiam odio quaerat.
          Veritatis nam itaque autem quisquam, doloribus eos quam vitae magnam
          incidunt, ad quis eius odio esse, cum necessitatibus blanditiis amet
          explicabo soluta!
        </p>

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
    </AnimatedPage>
  );
}

export default Mint;
