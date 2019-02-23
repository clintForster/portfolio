import React, { Component } from "react";
import Title from "../../Title/Title.js";
import Content from "../../Content/Content.js";
import "./Home.css";

class Home extends Component {

    render() {
        return (
            <div className="homeDiv">
                <Title/>
                <Content/>
            </div>
        );
    }
};

export default Home;