import React, { Component } from "react";
import "./css/about.css";

class About extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Marlo Baguyos</h1>
          <p className="lead">This is an FSDI project on React</p>
          <hr className="my-4"></hr>
          <div className="aboutDiv">
            <p className="lead">Email: marlo.baguyos@sdgku.edu</p>
            <p className="lead">Phone: marlo.baguyos@sdgku.edu</p>
          </div>
          <a onClick={this.handleButtonClick} className="btn btn-primary btn-lg" href="/about" role="button" >Learn more</a>
        </div>
      </div>
    );
  }


  handleButtonClick = () => {
    console.log("button is clicked")
      
  }
  
}
export default About;


/*
1. catch click event
2. call a function that
3. console.log("more info")

*/