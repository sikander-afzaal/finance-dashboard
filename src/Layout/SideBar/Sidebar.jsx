import React, { useEffect } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faCircleUser,
  faBolt,
  faCalculator,
  faBook,
  faEye,
  faCartArrowDown,
  faImagePortrait,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faTelegram,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
function Sidebar({ open, func }) {
  const clickHandler = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    func(false);
  };
  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/dashboard":
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".dasboard-link").classList.add("active");
        break;
      case "/calculator":
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".calculator-link").classList.add("active");
        break;
      case "/account":
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".account-link").classList.add("active");
        break;
      case "/mint":
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".mint-link").classList.add("active");
        break;
      case "/view":
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".view-link").classList.add("active");
        break;
      case "/trait":
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".trait-link").classList.add("active");
        break;

      default:
        break;
    }
  });

  return (
    <>
      <div
        onClick={() => func(false)}
        className={`overlay ${open ? "open-overlay" : ""}`}
      ></div>
      <div className={`sidebar ${open ? "open-sidebar" : ""}`}>
        <img src={logo} className={"display logo"} alt="" />
        <div className="top-sidebar">
          <Link
            to={"/"}
            onClick={clickHandler}
            className="row-link active dashboard-link"
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            <p>Dashboard</p>
          </Link>
          <Link
            to={"/account"}
            onClick={clickHandler}
            className="row-link account-link"
          >
            <FontAwesomeIcon icon={faCircleUser} />
            <p>Account</p>
          </Link>
          <Link
            to={"/calculator"}
            onClick={clickHandler}
            className="row-link calculator-link"
          >
            <FontAwesomeIcon icon={faCalculator} />
            <p>Calculator</p>
          </Link>
          <Link
            to={"/mint"}
            onClick={clickHandler}
            className="row-link mint-link"
          >
            <FontAwesomeIcon icon={faCartArrowDown} />
            <p>Mint Killer whales</p>
          </Link>
          <Link
            to={"/view"}
            onClick={clickHandler}
            className="row-link view-link"
          >
            <FontAwesomeIcon icon={faEye} />
            <p>View Killer whales</p>
          </Link>
          <Link
            to={"/traits"}
            onClick={clickHandler}
            className="row-link trait-link"
          >
            <FontAwesomeIcon icon={faImagePortrait} />
            <p>Traits</p>
          </Link>
          <a
            target={"blank"}
            href="https://pancakeswap.finance/swap?outputCurrency=0xd87fce0d8d6d8a38a2d808081fcfa79e78ba5a4a"
            className="row-link"
          >
            <FontAwesomeIcon icon={faBolt} />
            <p>Swap</p>
          </a>
          <a
            target={"blank"}
            href="https://orcaprotocol.gitbook.io/orcaprotocolbsc/"
            className="row-link"
          >
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
