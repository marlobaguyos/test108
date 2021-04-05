import React, { Component } from "react";
import "./css/about.css";

class About extends Component {
  state = {
    infoVisible: false,
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Marlo Baguyos</h1>
          <p className="lead">This is an FSDI project on React</p>
          <hr className="my-4"></hr>

          {this.getPersonalInfo()}
          <div className="buttonDiv">
            <button onClick={this.handleButtonClick} className="btn btn-primary btn-lg" href="#" role="button" >Learn more</button>
          </div>
        </div>
      </div>
    );
  }

  getPersonalInfo = () => {
    if (this.state.infoVisible){
      return (
        <div className="aboutDiv">
          <label className="lead">Email: marlo.baguyos@sdgku.edu</label>
          <label className="lead">Phone: marlo.baguyos@sdgku.edu</label>
        </div>
      )
    }else {
      return (
        <label>Click the button to get more info</label>
      )
    }
  };

  handleButtonClick = () => {
    this.setState({infoVisible:true});
  }
}
export default About;


/*
1. catch click event
2. call a function that
3. console.log("more info")

*/