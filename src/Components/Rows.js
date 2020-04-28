import React from 'react';
import Checkbox from './Checkbox';
import './Rows.css';
const Rows = (props) => {
    let boxes = props.boxes;
    let types = props.types;

    const groupBoxesByType = (arr) => {
        //TO DO: Make outer an object instead with types (like grain) as keys, with the "inner" array as its value
        let outer = [];
        let inner = [];
        for (let i = 0; i < arr.length; i++) {
            let current = (<Checkbox
                toggleBox={() => {
                    return props.toggleBox((i), arr[i].calories, arr[i].clicked);
                }}  
                type={arr[i].type} 
                calories={arr[i].calories} 
                clicked={arr[i].clicked} 
                key={arr[i].key} 
                />);
            if (i === arr.length - 1 || arr[i].type !== arr[i+1].type) {
                inner.push(current);
                outer.push(inner);
                inner = [];
            } else if (arr[i].type === arr[i+1].type) {
                inner.push(current)
            }
        }
        return outer;
    }
    const transformRows = (arr) => {
        let allRows = [];
        for (let i = 0; i < arr.length; i++) {
            let slice = arr.slice(i, i+1);
            allRows.push(<div className={types[i] + "Row row"} key={types[i] + "Row"}>{slice}</div>)
        }
        return allRows;
    }
    return (
        <div className="rowContainer">
        {transformRows(groupBoxesByType(boxes))}
        </div>
    )
}

export default Rows;