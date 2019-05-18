import React, { Component } from "react";
import "../App.css";

class PerInfo extends Component {
  render() {
    var style = {
      color: "white",
      paddingLeft: 49
    };
    return (
      <div>
        <h5 style={style}>{this.props.name}</h5>
        <p style={style}>{this.props.desc}</p>
      </div>
    );
  }
}

export default PerInfo;
