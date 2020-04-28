import React from 'react';
import './Checkbox.css';

const Checkbox = (props) => {
    let box = null;
    let toggledClass = '';

    props.clicked ? toggledClass = "toggleOn" : toggledClass = "toggleOff";

    box = <div onClick={props.toggleBox} className={`${props.type} ${toggledClass} box`}>{props.calories}</div>;

    return box;
}

export default Checkbox;