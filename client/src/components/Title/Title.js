import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js"
import nameFont from "./images/nameFont.png";
import "./Title.css";

class Title extends Component {

    state = {
        currentScrollHeight: 0
    }

    componentDidMount() {
        window.onscroll = () => {
            this.setState({
                currentScrollHeight: window.scrollY
            });
        }
    }


    render() {

        console.log(this.state.currentScrollHeight);

        return (
            <div id="container">
                <a href="/"><img src={nameFont} alt="name" data-offset-top="30" className="nameFont"/></a>
                <NavBar 
                scrollValue={this.state.currentScrollHeight}
                />
                <div className={this.state.currentScrollHeight > 105 ? ("gradient affix") : ("gradient")}></div>
            </div>
        );
    }
}

export default Title;