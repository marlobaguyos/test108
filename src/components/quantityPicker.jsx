import React, { Component } from 'react';
import './css/quantityPicker.css';

class QuantityPicker extends Component {
    state = { 
        quantity: 1,
        name: 'Marlo'
    }
    render() { 
        return (
            <div>
                <div className="container-button">
                    <button onClick={this.decreaseQuantity} className="btn btn-lg btn-dark minusbtn">-</button>
                    <label className="numLabel">{this.state.quantity}</label>
                    <button onClick={this.increaseQuantity} className="btn btn-lg btn-dark plusbtn">+</button>
                </div>
                <button className="btn btn-mb btn-dark">Add</button>
            </div>
        );
    }

    increaseQuantity = () => {
        console.log("button clicked");
        // this.state.quantity = 999; <-- DO NOT modify state directly
        
        let current = this.state.quantity + 1; // read from the state 
        this.setState({quantity:current});
    }

    decreaseQuantity = () => {
        console.log("button clicked");
        // this.state.quantity = 999; <-- DO NOT modify state directly
        let current = this.state.quantity - 1; // read from the state 
        if(current > 0){
            this.setState({quantity:current});
        }
    }
}

export default QuantityPicker