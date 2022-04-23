import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faArrowUpRightFromSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
function Header({ func }) {
  return (
    <div className="header">
      <div className="left-header">
        <h1 className="desktop">TITANO</h1>
        <FontAwesomeIcon
          onClick={() => func(true)}
          icon={faBars}
          className="mobile"
        />
      </div>
      <div className="right-header">
        <div className="link drop">
          <div className="top-link">
            <FontAwesomeIcon icon={faCircleInfo} />
            <p>TITANO $0.0771 USD</p>
          </div>

          <div className="dropdown">
            <div className="drop-link">
              <p>Buy on Pancake Swap</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
            <div className="drop-link">
              <p>Chart</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
        </div>
        <div className="link2">
          <p>Connect Wallet</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
