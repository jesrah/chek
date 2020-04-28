import React, { Component } from 'react';
import Rows from './Rows'

class Board extends Component {
    state = {
        boxes: [
          {type: "grain", quantity: 3, calories: 100},
          {type: "veg", quantity: 4,  calories: 50},
          {type: "protein", quantity: 6, calories: 50},
          {type: "fruit", quantity: 4, "calories": 50},
          {type: "fat", quantity: 4, "calories": 50},
        ],
        checked: 0,
        total: 1200,
      }
    
    toggleBoxHandler = (e) => {
        //invert colors for each box
        // this.setState({
            
        // })
        //add or subtract from the total
    }
    calculateConsumed = () => {
        //count number of boxes that have the value clicked=true
    }

    calculateTotal = () => {
        let total = this.state.boxes.reduce((acc, ele) => {
            return acc + (ele.calories * ele.quantity)
        }, 0)
        //TO DO: instead of return total, set state.total to new total and then reference this.state.total in the div below
        return total;
    }
    render () {
        return (
            <div>
                <Rows toggleHandler={() => {this.toggleBoxHandler()}} boxes={this.state.boxes} checked={this.state.checked} total={this.state.total} />
                <div class="displayTotal">Today: {this.state.checked}/{this.calculateTotal()}</div>
            </div>
        )
    }
}

export default Board;