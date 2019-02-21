import React from "react";
import { Link } from "react-router-dom";
import initialFont from "./initialFont.png";
import "./NavBar.css";

function NavBar(props) {

    console.log(props.scrollValue);
    const style = {
        background: "black",
        filter: "invert(0%)"
    };
    const transition = {
        opacity: 1,
        transition: "opacity .6s"
    };

    return (
        <div className={props.scrollValue > 127 ? ("wrapper fixed") : ("wrapper affix-top")}>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/about" className={window.location.pathname === "/play" ? "nav-link active" : "nav-link"} >
                            ABOUT
        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={window.location.pathname === "/play" ? "nav-link active" : "nav-link"} >
                            PORTFOLIO
        </Link>
                    </li>
                    {props.scrollValue <= 120 ? (
                    <li className="imageItem" >
                        <img style={style} className="initialFont" src={initialFont} alt="initialFont"/>
                    </li>
                    ) : (<li className="imageItem" >
                        <img style={transition} className="initialFont" src={initialFont} alt="initialFont"/>
                    </li>)}
                    <li>
                        <Link to="/skills" className={window.location.pathname === "/play" ? "nav-link active" : "nav-link"} >
                            SKILLS
        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={window.location.pathname === "/play" ? "nav-link active" : "nav-link"} >
                            CONTACT
        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;