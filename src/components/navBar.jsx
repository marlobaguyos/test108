import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark fixed-top  navbar-expand-lg">
                    <div className="container-fluid">
                        <label className="navbar-brand" href="/">Lapu Lapu</label>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/catalog">Catalog</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;