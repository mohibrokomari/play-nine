import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
var _ = require("lodash");

const Stars = props => {

    const numberOfStars = 1 + Math.floor(Math.random()*9);

    let stars = []
    for (let i=0; i<numberOfStars; i++) {
        stars.push(<i key={i} className="fa fa-star" />);
    }
    return (
        <div className="col-md-5">
            {stars}
        </div>
    );
};
const Button = props => {
    return (
        <div className="col-md-2">
            <button>=</button>
        </div>
    );
};
const Answer = props => {
    return (
        <div className="col-md-5">

        </div>
    );
};

const Number = (prpos) => {

    const arrayOfNumber = _.range(1,10);
    
    return (
        <div className="card text-center">
            <div className="">
                {arrayOfNumber.map((number, i) => {
                    return <span key={i}>{number}</span>
                })}
            </div>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div className="container">
            <h3>Play Nine</h3>
                    <hr/>
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>

                <br/>
                <Number/>
            </div>
        );
    }
}

export default App;