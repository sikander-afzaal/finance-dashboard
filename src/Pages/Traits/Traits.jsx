import React from "react";
import "./Traits.css";
import AnimatedPage from "../../Components/AnimatedPage";
import SmallBox from "../../Components/SmallBox";
import data from "./images";
function Traits() {
  return (
    <AnimatedPage>
      <div className="traits">
        {/* Skins box ----------------- */}
        <div className="traits-box">
          <h1>Skins</h1>
          <div className="traits-grid">
            {data.body.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* cyber box --------------------------- */}
        <div className="traits-box">
          <h1>Cyber</h1>
          <div className="traits-grid">
            {data.cyber.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* head gear box --------------------------- */}
        <div className="traits-box">
          <h1>Head Wear</h1>
          <div className="traits-grid">
            {data.head.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* necklaces box --------------------------- */}
        <div className="traits-box">
          <h1>NeckLaces</h1>
          <div className="traits-grid">
            {data.neck.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Sling Bag box --------------------------- */}
        <div className="traits-box">
          <h1>Sling Bag</h1>
          <div className="traits-grid">
            {data.sling.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Tattoos box --------------------------- */}
        <div className="traits-box">
          <h1>Tattoos</h1>
          <div className="traits-grid">
            {data.tattoo.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Tooth box --------------------------- */}
        <div className="traits-box">
          <h1>Tooth</h1>
          <div className="traits-grid">
            {data.tooth.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Batman box --------------------------- */}
        <div className="traits-box">
          <h1>Batman</h1>
          <div className="traits-grid">
            {data.batman.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Festival box --------------------------- */}
        <div className="traits-box">
          <h1>Festival</h1>
          <div className="traits-grid">
            {data.festival.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Hoodie box --------------------------- */}
        <div className="traits-box">
          <h1>Hoodie</h1>
          <div className="traits-grid">
            {data.Hoodie.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Joker box --------------------------- */}
        <div className="traits-box">
          <h1>Joker</h1>
          <div className="traits-grid">
            {data.Joker.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Military box --------------------------- */}
        <div className="traits-box">
          <h1>Military</h1>
          <div className="traits-grid">
            {data.Military.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Shinta box --------------------------- */}
        <div className="traits-box">
          <h1>Shinta</h1>
          <div className="traits-grid">
            {data.Shinta.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Shirts box --------------------------- */}
        <div className="traits-box">
          <h1>Shirts</h1>
          <div className="traits-grid">
            {data.Shirts.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Singlet box --------------------------- */}
        <div className="traits-box">
          <h1>Singlet</h1>
          <div className="traits-grid">
            {data.Singlet.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Tshirt box --------------------------- */}
        <div className="traits-box">
          <h1>T-Shirts</h1>
          <div className="traits-grid">
            {data.Tshirt.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Tuxedo box --------------------------- */}
        <div className="traits-box">
          <h1>Tuxedo</h1>
          <div className="traits-grid">
            {data.Tuxedo.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Traits;
