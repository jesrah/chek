import React from 'react';
import Checkbox from './Checkbox';
import './Rows.css';
const Rows = (props) => {
    let boxes = props.boxes;
    let checked = props.checked;
    let total = props.total;

    const addBoxesToRow = (obj) => {
        let array = [];
        for (let i = 0; i < obj.quantity; i++) {
            array.push (<Checkbox 
                            toggleBox={() => props.toggleBox((obj.type + i), obj.calories, obj.clicked)} 
                            className="box" 
                            key={obj.type + i} 
                            type={obj.type} 
                            calories={obj.calories} 
                            clicked={obj.clicked} 
                        />)
        }
        return array;
    }

    //this is the same as writing out 
    //<div className="grainRow row">{transformBoxes(boxes[0])}</div>
    //<div className="fatRow row">{transformBoxes(boxes[4])}</div>
    //etc
    const transformRows = (arr) => {
        let allRows = [];
        for (let i = 0; i < arr.length; i++) {
            allRows.push(<div className={arr[i].type + "Row row"}>{addBoxesToRow(boxes[i])}</div>)
        }
        return allRows;
    }

    return (
        <div className="rowContainer">
        {transformRows(boxes)}
        </div>
    )
}

export default Rows;