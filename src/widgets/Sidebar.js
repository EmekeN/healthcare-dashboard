import React from "react";
// import logo from '../logo.svg';
import logo from "./../assets/galileo.png";
import logout from "./../assets/logout.svg";
import "./Sidebar.scss";

export default function Sidebar(props) {
    return (
        <div className="Sidebar">
            <img src={logo} className="logo" alt="Galileo Take home test" />

            <a className="logout" href="https://galileohealth.com/">
                <p>Exit</p>

                <img
                    src={logout}
                    className="logout-img"
                    alt="Log out of Demo"
                />
            </a>
        </div>
    );
}
