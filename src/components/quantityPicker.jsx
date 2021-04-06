import React, { Component } from 'react';
import './css/quantityPicker.css';

class QuantityPicker extends Component {
    state = { 
        quantity: this.props.minimum,
        name: 'Marlo'
    }
    render() { 
        return (
            <div className="input-group mb-3 buttonCont">
                <button onClick={this.increaseQuantity} className="btn btn-md btn-dark active">+</button>
                <div className="input-group-prepend">
                    <span className="input-group-text spanTxt" id="basic-addon1">{this.state.quantity}</span>
                </div>
                <button onClick={this.decreaseQuantity} className="btn btn-md btn-dark active">-</button>
            </div>
        );
    }

    increaseQuantity = () => {
        // this.state.quantity = 999; <-- DO NOT modify state directly
        
        let current = this.state.quantity + 1; // read from the state 
        this.setState({quantity:current});

        this.props.onValueChange(current);
    };

    decreaseQuantity = () => {
        // this.state.quantity = 999; <-- DO NOT modify state directly
        let current = this.state.quantity - 1; // read from the state 
        if(current >= this.props.minimum){
            this.setState({quantity:current});
            this.props.onValueChange(current);
        }
    };
}

export default QuantityPicker