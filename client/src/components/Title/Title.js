import React from "react";
import NavBar from "../NavBar/NavBar.js"
import "./Title.css";

function Title(props) {

    if (props.scrollValue > 1 ) {

    }

        return (
            <div id="container">
                <a href="/" className="text-white" ><h1 className="nameFont">Clint Forster</h1></a>
                <div className="fixedContainer">
                <NavBar 
                scrollValue={props.scrollValue}
                />
                <div className={props.scrollValue > 95 ? ("affix") : ("gradient")}></div>
            </div>
            </div>
        );
}

export default Title;