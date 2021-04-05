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
          <p className="lead">
            <label>Email: marlo.baguyos@sdgku.edu</label>
            <label>Phone: marlo.baguyos@sdgku.edu</label>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
