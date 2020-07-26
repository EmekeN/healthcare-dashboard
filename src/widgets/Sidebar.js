
import React from 'react';
// import logo from '../logo.svg';
import logo from './../assets/galileo.png';
import logout from './../assets/logout.svg';
import './Sidebar.scss';

export default function Sidebar(props) {

    return (
        <div className="Sidebar">
            {/* <div> */}
                <img src={logo} className="logo" alt="Galileo Take home test"/>
                {/* <div className="divider"/> */}
            {/* </div> */}

            {/* <div> */}
                {/* <div className="divider"/> */}
                <a className="logout" href="https://galileohealth.com/">
                    <p>Exit Demo</p>
                    <img src={logout} className="logout-img" alt="Log out of Demo"/>
                </a>
            {/* </div> */}
        </div>

    )

}