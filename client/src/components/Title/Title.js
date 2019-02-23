import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.js"
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

    // Pushed pushing for more commits

    render() {
        let number = 200 - (this.state.currentScrollHeight / 2.5);
        let percent = number + "%";
        let style;
        if (number >= 100) {
            style = {
                height: 100 + "%"
            };
        } else if (number < 40) {
            style = {
                height: 40 + "%"
            };
        } else {
            style = {
                height: percent
            };
        }

    

        return (
            <div id="container">
                <a href="/"><h1 className="nameFont">Clint Forster</h1></a>
                <div className="fixedContainer">
                <NavBar 
                scrollValue={this.state.currentScrollHeight}
                />
                <div style={style} className={this.state.currentScrollHeight > 90 ? ("gradient affix") : ("gradient")}></div>
            </div>
            </div>
        );
    }
}

export default Title;