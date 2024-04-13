//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import reloj from "./../img/reloj.png";

//import your own components
import Home from "./component/home.jsx";

function SimpleCounter(){
    return (<div className="bigCounter">
        <div className="calendar">
            <img reloj></i>
        </div>
        <div className="four">0</div>
        <div className="three">0</div>
        <div className="two">0</div>
        <div className="one">0</div>
    </div>);
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));


