import React from "react";
import image1 from "./image1.jpg";
import "./Content.css";
import { relative } from "path";

function Content(props) {

    let style = {
        margin: "90px 0px 0px 0px",
    };

    return (
        <div className="contain" >
            <div className="imageDiv" >
            {props.scrollValue < 95 ? (
                <img className="image" src={image1} alt="introImage" />
            ) : (
                <img className="image" style={style} src={image1} alt="introImage" />
            )}
                <div className="lowerGradient"></div>
            </div>
        </div >
    );
}

export default Content;