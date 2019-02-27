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
            <div>
                <Title
                    scrollValue={this.state.currentScrollHeight}
                />
                <div className="row">
                    <div className="col-md large">
                        
                    </div>
                    <div className="col-md small">
                        
                    </div>
                </div>
            </div>
        );
    }
};

export default Portfolio;