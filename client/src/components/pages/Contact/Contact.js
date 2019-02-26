import React, { Component } from "react";
import Title from "../../Title/Title.js";
import {
    AwesomeButton,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
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
                                    ripple="true"
                                    cssModule={AwesomeButtonStyles}
                                    type="linkedin"
                                    href="https://www.linkedin.com/in/clint-forster"
                                >Linkedin</AwesomeButtonSocial>
                            </div>
                        </div>
                        <div className="col-md module-border-wrap">
                            <div className="module">
                                <p>Take a copy of my résumé!</p>
                                <AwesomeButton
                                    size="medium"
                                    type="primary"
                                    ripple="true"
                                    download=""
                                    cssModule={AwesomeButtonStyles}
                                >Resume</AwesomeButton>
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
                                    ripple="true"
                                    cssModule={AwesomeButtonStyles}
                                    type="instagram"
                                    href="https://www.instagram.com/clintforster/"
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