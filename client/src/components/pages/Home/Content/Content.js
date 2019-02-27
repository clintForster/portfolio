import React from "react";
import image1 from "./image1.jpg";
import "./Content.css";

function Content(props) {

    let style = {
        margin: "157px 0px 0px 0px",
    };

    return (
        <div className="contain" >
            <div className="imageDiv" >
            {props.scrollValue < 80 ? (
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