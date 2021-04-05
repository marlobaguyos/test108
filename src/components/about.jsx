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

          {
            this.state.infoVisible ? (
              <div>
                <label className="lead">Email: marlo.baguyos@sdgku.edu</label>
                <label className="lead">Phone: marlo.baguyos@sdgku.edu</label>
              </div>
            ) : (
              <label>Click for more info</label>
            )
            

          }
          <div className="aboutDiv">
            
          </div>
          <a onClick={this.handleButtonClick} className="btn btn-primary btn-lg" href="#" role="button" >Learn more</a>
        </div>
      </div>
    );
  }


  handleButtonClick = () => {
    console.log("More Info")
      
  }
  
}
export default About;


/*
1. catch click event
2. call a function that
3. console.log("more info")

*/