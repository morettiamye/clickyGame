import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div>
    <ul className="nav nav-pills nav-justified">
        <li><a href="/">Click-a-Cat!</a></li>
        <li>
            className={props.message.indexOf('incorrectly') !== -1 ? 
                "desc-incorrect" : 
                props.message.indexOf('correctly') !== -1 ?
                    "desc-correct" :
                    "desc-normal"}
            {props.message}
        </li>
        <li>Score: <span style={{color: "yellow"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
    </ul>
</div>
);

export default Navbar;