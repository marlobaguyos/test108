//imrc
import React, { Component } from "react";
import "./css/footer.css";

//cc
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="flexContainer">
                    <div className="footer-cr">
                        2021 All rights reserved.
                    </div>
                    <label className="footer-name">Marlo Baguyos.</label>
                </div> */}
        <div>
          <footer className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark fixed-bottom">
            <div className="container-fluid">
              <div>
                <p className="navbar-brand">Lapu Lapu</p>
              </div>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <p className="nav-link active" aria-current="page" href="#">
                      2021 All rights reserved
                    </p>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link active" aria-current="page" href="#">
                      Marlo Baguyos
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
export default Footer;
