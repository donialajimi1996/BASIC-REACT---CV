import React, { Component } from "react";
import "../App.css";

class Left extends Component {
  render() {
    var img = {
      width: 340,
      height: 360,
      paddingLeft: 50
    };
    var name = {
      fontSize: 30,
      fontFamily: "Georgia, serif",
      textAlign: "center",
      color: "white"
    };
    var des = {
      color: "white",
      textAlign: "center",
      fontFamily: "Georgia",
      fontSize: 20
    };
    return (
      <div>
        <b>
          {" "}
          <p style={name}>{this.props.name}</p>
        </b>
        <p style={des}>{this.props.des}</p>
        <img style={img} src={this.props.source} alt="donia" />
      </div>
    );
  }
}

export default Left;
