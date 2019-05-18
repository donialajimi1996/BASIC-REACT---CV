import React, { Component } from "react";
import "../App.css";

class Skills extends Component {
  render() {
    var style = {
      color: "white",
      paddingLeft: 49
    };
    return (
      <div>
        <h5 style={style}>{this.props.titre}</h5>
      </div>
    );
  }
}

export default Skills;
