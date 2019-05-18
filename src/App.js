import React, { Component } from "react";
import donia from "./donia.jpg";
import "./App.css";
import Left from "./component/left";
import PerInfo from "./component/perInfo";
import Skills from "./component/skills";
import Profile from "./component/profile";
import Experiences from "./component/experiences";
class App extends Component {
  state = {
    name: "Donia Lajimi",
    des: "Future Web Developer",
    image: donia,
    address: "Khaier eddine ben mustpha sahloul I, sousse",
    phone: "+216 58 035 896",
    email: "donialajimi@yahoo.fr",
    birth: "1996-01-18",
    github: "github.com/donialajimi1996/",
    skill1: "C/C++",
    skill2: "JAVA",
    skill3: "HTML5",
    skill4: "CSS3",
    skill5: "Javascript",
    skill6: "VHDL",
    skill7: "ReactJs",
    description:
      "Ambitious and sociable student in 2nd year of Applied science science degree in computer science and communication in search of an internship to put into practice the previously acquired tools and knowledge",
    dateExperience: "Since october 2018",
    eventNameExperience: "GoMyCode / Sousse web development training",
    eventDesc:
      "Development of a technological product (website) level 1 and level 2"
  };
  render() {
    var titre = {
      color: "white",
      backgroundColor: "#37151c",
      paddingLeft: 49,
      paddingTop: 2,
      paddingBottom: 2,
      fontFamily: "Didot"
    };
    var titre1 = {
      paddingLeft: 30,
      fontFamily: "Didot",
      color: "#37151c"
    };
    var hr = {
      color: "#37151c"
    };
    var date = {
      fontFamily: "Bradley Hand"
    };
    const EducationsInfos = [
      {
        date: "From September 2010 to June 2015",
        event: "DIPLOMA Bachelor of Science: Taher Sfar High School ",
        state: "active"
      },
      {
        date: "From september 2015 to june 2017",
        event:
          "Bachelor's degree in Mathematics University of Science and Technology Hammam Sousse",
        state: "active"
      },
      {
        date: "Since september 2017",
        event:
          "License applied science and technology of computer science and communication The school of sciences and technology Hammam Sousse",
        state: "none"
      }
    ];

    const educations = EducationsInfos.map(education => (
      <div className="Project">
        <h6 style={date} className="des">
          {education.date}
        </h6>
        <p className="des">{education.event}</p>
      </div>
    ));
    return (
      <div className="CV">
        <div className="left">
          <Left
            name={this.state.name}
            des={this.state.des}
            source={this.state.image}
          />{" "}
          <h3 style={titre}>Personal Info</h3>
          <PerInfo name="Address :" desc={this.state.address} />
          <PerInfo name="Phone :" desc={this.state.phone} />
          <PerInfo name="E-mail :" desc={this.state.email} />
          <PerInfo name="Date of birth :" desc={this.state.birth} />
          <PerInfo name="Github :" desc={this.state.github} />
          <h3 style={titre}>Skills</h3>
          <Skills titre={this.state.skill1} />
          <Skills titre={this.state.skill2} />
          <Skills titre={this.state.skill3} />
          <Skills titre={this.state.skill4} />
          <Skills titre={this.state.skill5} />
          <Skills titre={this.state.skill6} />
          <Skills titre={this.state.skill7} />
        </div>
        <div className="right">
          <hr style={hr} />
          <h3 style={titre1}>Profile : </h3>
          <hr style={hr} />
          <Profile description={this.state.description} />
          <hr style={hr} />
          <h3 style={titre1}>Professional experience</h3>
          <hr style={hr} />
          <Experiences
            date={this.state.dateExperience}
            event={this.state.eventNameExperience}
            eventDesc={this.state.eventDesc}
          />
          <hr style={hr} />
          <h3 style={titre1}>Educations</h3>
          <hr style={hr} />
          {educations}
        </div>
      </div>
    );
  }
}

export default App;
