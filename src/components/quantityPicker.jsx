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
                    <button onClick={this.increaseQuantity} className="btn btn-md btn-dark active">+</button>
                    <label className="numLabel">{this.state.quantity}</label>
                    <button onClick={this.decreaseQuantity} className="btn btn-md btn-dark active">-</button>
                </div>
            </div>
        );
    }

    increaseQuantity = () => {
        console.log("button clicked");
        // this.state.quantity = 999; <-- DO NOT modify state directly
        
        let current = this.state.quantity + 1; // read from the state 
        this.setState({quantity:current});

        this.props.onValueChange();
    }

    decreaseQuantity = () => {
        console.log("button clicked");
        // this.state.quantity = 999; <-- DO NOT modify state directly
        let current = this.state.quantity - 1; // read from the state 
        if(current > 0){
            this.setState({quantity:current});
        }
        this.props.onValueChange();
    }
}

export default QuantityPicker