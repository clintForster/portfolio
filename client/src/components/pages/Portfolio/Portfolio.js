import React, { Component } from "react";
import Title from "../../Title/Title.js";
import "./Portfolio.css";

class Portfolio extends Component {

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
        return (
            <div className="portContainer">
                <Title
                    scrollValue={this.state.currentScrollHeight}
                />
                <div className="row">
                    <div className="buttonDiv">

                    </div>
                </div>
                <div className="row">
                    <div className="gifDiv">

                    </div>
                </div>
            </div>
        );
    }
};

export default Portfolio;