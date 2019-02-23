import React from "react";
import profilePic from "./profilePic.PNG";
import "./Content.css";

function Content() {
    return (
        <div className="contain" >
            <div className="contentDiv">
                <h1 className="hello" >Hello, </h1>
                <h1>Welcome</h1>
            </div>
            <div className="imageDiv" >
                <img className="image" src={profilePic} alt="profilePic" />
                <div className="blurredEdges"></div>
            </div>
        </div >
    );
}

export default Content;