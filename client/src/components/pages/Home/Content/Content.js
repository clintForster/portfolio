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

// <div class="parallax-container">
//       <div class="parallax"><img src="images/parallax1.jpg"></div>
//     </div>
//     <div class="section white">
//       <div class="row container">
//         <h2 class="header">Parallax</h2>
//         <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
//       </div>
//     </div>

export default Content;