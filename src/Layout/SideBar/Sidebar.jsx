import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faCircleUser,
  faBolt,
  faCalculator,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faTelegram,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Sidebar({ open, func }) {
  const clickHandler = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    func(false);
  };
  return (
    <>
      <div
        onClick={() => func(false)}
        className={`overlay ${open ? "open-overlay" : ""}`}
      ></div>
      <div className={`sidebar ${open ? "open-sidebar" : ""}`}>
        <h1 className={`display`}>TITANO</h1>
        <div className="top-sidebar">
          <Link to={"/"} onClick={clickHandler} className="row-link active">
            <FontAwesomeIcon icon={faLayerGroup} />
            <p>Dashboard</p>
          </Link>
          <Link to={"/account"} onClick={clickHandler} className="row-link">
            <FontAwesomeIcon icon={faCircleUser} />
            <p>Account</p>
          </Link>
          <Link to={"/calculator"} onClick={clickHandler} className="row-link">
            <FontAwesomeIcon icon={faCalculator} />
            <p>Calculator</p>
          </Link>
          <a href="#" className="row-link">
            <FontAwesomeIcon icon={faBolt} />
            <p>Swap</p>
          </a>
          <a href="#" className="row-link">
            <FontAwesomeIcon icon={faBook} />
            <p>Docs</p>
          </a>
        </div>
        <div className="bottom-sidebar">
          <a href="#">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
