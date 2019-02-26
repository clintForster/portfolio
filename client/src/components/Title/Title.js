import React from "react";
import NavBar from "../NavBar/NavBar.js"
import "./Title.css";

function Title(props) {

        return (
            <div id="container">
                <a href="/" className="text-white" ><h1 className="nameFont">Clint Forster</h1></a>
                <div className="fixedContainer">
                <NavBar 
                scrollValue={props.scrollValue}
                />
                <div className={props.scrollValue > 80 ? ("affix") : ("gradient")}></div>
            </div>
            </div>
        );
}

export default Title;