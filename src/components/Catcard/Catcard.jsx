import React from "react";
import "./Catcard.css";

const Catcard = props => (
  <div className="card">
  <div className="img-container">
          <img alt={props.name} src={props.image} onClick={() => props.selectCat(props.name)} />
  </div>
</div>
);

export default Catcard;