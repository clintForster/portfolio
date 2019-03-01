import React from "react";
import image1 from "./image1.jpg";
import "./Content.css";

function Content(props) {
console.log(props.scrollValue);
    return (
        <div className={props.scrollValue < 80 ? ("contain") : ("contain")} >
            <div className="imageDiv parallax bg1" >
                <img className="image" src={image1} alt="introImage" />
                <div className="imageP">
                <p id={props.scrollValue > 80 && props.scrollValue < 350 ? ("NYA") : ("noNYA")} className="pTag text-white">Not your average</p>
                <p id={props.scrollValue > 80 && props.scrollValue < 350 ? ("FSD") : ("noFSD")} className="pTag text-white">Full Stack Developer</p>
                </div>
                <div className="lowerGradient"></div>
            </div>
            <h2>About Me</h2>
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