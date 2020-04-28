import React, { Component } from 'react';
import './Checkbox.css';

const Checkbox = (props) => {
    let box = null;
    switch(props.type) {
        case ('grain'):
            box = <div onClick={props.toggleBox} className="grain box">{props.calories}</div>;
            break;          
        case ('veg'):
            box = <div className="veg box">{props.calories}</div>;
            break;            
        case ('protein'):
            box = <div className="protein box">{props.calories}</div>;
            break;            
        case ('fruit'):
            box = <div className="fruit box">{props.calories}</div>;
            break;            
        case ('fat'):
            box = <div className="fat box">{props.calories}</div>;
            break;
    }
    return box;
}

export default Checkbox;