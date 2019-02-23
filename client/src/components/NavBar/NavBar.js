import React from "react";
import { Link } from "react-router-dom";
import initialFont from "./initialFont.png";
import "./NavBar.css";

function NavBar(props) {

    console.log(props.scrollValue);
    const style = {
        opacity: 0
    };

    return (
        <div className={props.scrollValue > 90 ? ("wrapper fixed") : ("wrapper affix-top")}>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/gallery" className={window.location.pathname === "/play" ? "nav-a active" : "nav-a"} >
                            GALLERY
        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={window.location.pathname === "/play" ? "nav-a active" : "nav-a"} >
                            PORTFOLIO
        </Link>
                    </li>
                    {props.scrollValue <= 90 ? (
                    <li className="imageItem" >
                        <img style={style} className="initialFont" src={initialFont} alt="initialFont"/>
                    </li>
                    ) : (<li className="imageItem" >
                        <img className="initialFont" src={initialFont} alt="initialFont"/>
                    </li>)}
                    <li>
                        <Link to="/skills" className={window.location.pathname === "/play" ? "nav-a active" : "nav-a"} >
                            SKILLS
        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={window.location.pathname === "/play" ? "nav-a active" : "nav-a"} >
                            CONTACT
        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;