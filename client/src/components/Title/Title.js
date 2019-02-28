import React from "react";
import NavBar from "../NavBar/NavBar.js";
import profilePic from "../pages/Home/Content/profilePic.PNG";
import "./Title.css";

function Title(props) {

        return (
            <div className={props.scrollValue > 80 ? ("wrap fixed") : ("wrap")}>
                <a href="/" className="text-white" ><h1 className={props.scrollValue > 80 ? ("unFixed nameFont") : ("nameFont onLoad")}>Clint Forster</h1></a>
                <NavBar 
                scrollValue={props.scrollValue}
                />
                <div className="titleShadow"></div>
                <div className="profilePicDiv">
                    <div className="titleModule-border-wrap3">
                        <div className="titleModule">
                            <img className="titleProfilePic" src={profilePic} alt="profilePic"/>
                        </div>
                    </div>
                </div>

            </div>
        );
}

export default Title;