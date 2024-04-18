//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../styles/index.css"

// include your styles into the webpack bundle
import reloj from "./../img/reloj.png";

//import your own components
import Home from "./component/home.jsx";

function SimpleCounter(props) {
    return (<div className="bigCounter">


        <img className="calendar" src={reloj} />


        <div className="four numero">{props.digitFour %10}</div>
        <div className="three numero">{props.digitThree %10}</div>
        <div className="two numero">{props.digitTwo %10}</div>
        <div className="one numero">{props.digitOne %10}</div>
    </div>);
}
SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,

}

let counter = 0;
let one = 0;
let two = 0;
let three = 0;
let four = 0;
setInterval(function () {
    four = Math.floor(counter / 1000);
    three = Math.floor(counter / 100);
    two = Math.floor(counter / 10);
    one = Math.floor(counter / 1);
    console.log(four, three, two, one);

    counter++;
    ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector("#app"));

}, 1000

)

//render your react application


