import React, { Component } from 'react';
import './Checkbox.css';

const Checkbox = (props) => {
    let box = null;
    switch(props.type) {
        case ('grain'):
            box = <div onClick={props.toggleBox} className="grain box">{props.calories}</div>;
            break;          
        case ('veg'):
            box = <div onClick={props.toggleBox} className="veg box">{props.calories}</div>;
            break;            
        case ('protein'):
            box = <div onClick={props.toggleBox} className="protein box">{props.calories}</div>;
            break;            
        case ('fruit'):
            box = <div onClick={props.toggleBox} className="fruit box">{props.calories}</div>;
            break;            
        case ('fat'):
            box = <div onClick={props.toggleBox} className="fat box">{props.calories}</div>;
            break;
    }
    return box;
}

export default Checkbox;