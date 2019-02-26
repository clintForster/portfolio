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
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-a text-white" >
                            GALLERY
        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="nav-a text-white" >
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
                        <Link to="/skills" className="nav-a text-white" >
                            SKILLS
        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-a text-white" >
                            CONTACT
        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;