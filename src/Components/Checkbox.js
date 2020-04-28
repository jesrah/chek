import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
    render() {
        let box = null;

        switch(this.props.type) {
            case ('grain'):
                box = <div className="grain box">{this.props.calories}</div>;
                break;          
            case ('veg'):
                box = <div className="veg box">{this.props.calories}</div>;
                break;            
            case ('protein'):
                box = <div className="protein box">{this.props.calories}</div>;
                break;            
            case ('fruit'):
                box = <div className="fruit box">{this.props.calories}</div>;
                break;            
            case ('fat'):
                box = <div className="fat box">{this.props.calories}</div>;
                break;
        }
        return box;
    }
}

export default Checkbox;