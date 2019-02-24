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

    

        return (
            <div id="container">
                <a href="/" className="text-white" ><h1 className="nameFont">Clint Forster</h1></a>
                <div className="fixedContainer">
                <NavBar 
                scrollValue={this.state.currentScrollHeight}
                />
                <div className={this.state.currentScrollHeight > 80 ? ("gradient affix") : ("gradient")}></div>
            </div>
            </div>
        );
    }
}

export default Title;