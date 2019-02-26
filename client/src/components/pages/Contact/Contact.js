import React, { Component } from "react";
import Title from "../../Title/Title.js";
import { AwesomeButtonSocial } from "react-awesome-button";
import { AwesomeButtonProgress } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import "./Contact.css";

class Contact extends Component {

    render() {
        return (
            <div>
                <Title />
                <div className="contianer pad">
                    <div className="row">
                        <div className="col-md module-border-wrap">
                            <div className="module">
                                <p>Follow Me on Linkedin!</p>
                                <AwesomeButtonSocial
                                    size="medium"
                                    type="primary"
                                    disabled="false"
                                    fakePress="false"
                                    ripple="true"
                                    cssModule={AwesomeButtonStyles}
                                    type="linkedin"
                                    url="https://www.linkedin.com/in/clint-forster"
                                >Linkedin</AwesomeButtonSocial>
                            </div>
                        </div>
                        <div className="col-md module-border-wrap">
                            <div className="module">
                                <p>Take a copy of my résumé!</p>

                                <AwesomeButtonProgress
                                    size="medium"
                                    type="primary"
                                    disabled="false"
                                    fakePress="false"
                                    ripple="true"
                                    cssModule={AwesomeButtonStyles}
                                    action={(element, next) => {
                                        setTimeout(() => {
                                            next();
                                        }, 600);
                                    }}
                                >Résumé</AwesomeButtonProgress>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md module-border-wrap">
                            <div className="module">
                                <p>Checkout my photography on Instagram!</p>
                                <AwesomeButtonSocial
                                    size="medium"
                                    type="primary"
                                    disabled="false"
                                    fakePress="false"
                                    ripple="true"
                                    cssModule={AwesomeButtonStyles}
                                    type="instagram"
                                    url="https://www.instagram.com/clintforster/"
                                    loadingLabel="hold on"
                                >Instagram</AwesomeButtonSocial>
                            </div>
                        </div>
                        <div className="col-md module-border-wrap">
                            <div className="module">
                                <p>Feel free to email me with any comments and questions!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;