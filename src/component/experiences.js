import React, { Component } from "react";
import "../App.css";

class Experiences extends Component {
  render() {
    var date = {
      fontFamily: "Bradley Hand"
    };
    return (
      <div>
        <h6 style={date} className="des">
          {this.props.date}
        </h6>
        <p className="des"> {this.props.event} </p>
        <p className="des">{this.props.eventDesc}</p>
      </div>
    );
  }
}

export default Experiences;
