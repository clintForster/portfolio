import React, { Component } from "react";
import Title from "../../Title/Title.js";
import { AwesomeButtonSocial } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
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
            <div className={this.state.currentScrollHeight > 80 ? ("portContainer portMargin") : ("portContainer")}>
                <Title
                    scrollValue={this.state.currentScrollHeight}
                />
                <div className="row">
                    <div className="portButtonDiv">
                        <div className="portModule-border-wrap1">
                            <div className="portModule">
                                <p id="buttonP">
                                   Visit our Github repository to see how me and my team created CodeRacer.
                        </p>
                                <div className="portButton">
                                    <AwesomeButtonSocial
                                        type="github"
                                        cssModule={AwesomeButtonStyles}
                                        ripple="true"
                                        href="https://github.com/c811k/code-racer"
                                    >Github</AwesomeButtonSocial>
                                </div>
                            </div>
                        </div>
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