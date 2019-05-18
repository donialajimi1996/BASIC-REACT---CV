import React, { Component } from "react";
import "../App.css";

class Profile extends Component {
  render() {
    var style = {
      fontFamily: "URW Chancery L",
      fontSize: 20
    };
    return (
      <div className="des">
        <p style={style}>{this.props.description}</p>
      </div>
    );
  }
}

export default Profile;
