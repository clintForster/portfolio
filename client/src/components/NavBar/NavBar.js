import React from "react";
import { Link } from "react-router-dom";
import initialFont from "./initialFont.png";
import "./NavBar.css";

function NavBar(props) {
    
    const style = {
        opacity: 0
    };

    return (
        <div className={props.scrollValue > 80 ? ("wrapper fixed") : ("wrapper")}>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Link to="/portfolio" className="nav-a text-secondary" >
                            PORTFOLIO
        </Link>
                    </li>
                    {props.scrollValue <= 80 ? (
                    <li style={style} className="imageItem" >
                        <img style={style} className="initialFont" src={initialFont} alt="initialFont"/>
                    </li>
                    ) : (<li className="imageItem" >
                        <img className="initialFont" src={initialFont} alt="initialFont"/>
                    </li>)}
                    <li>
                        <Link to="/contact" className="nav-a text-secondary" >
                            CONTACT
        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;