import React, { Component } from 'react';
import Rows from './Rows'

class Board extends Component {
    state = {
        boxes: [
          {type: "grain", color: "#d6bb22", calories: 100, clicked: false, key: 0},
          {type: "grain", color: "#d6bb22", calories: 100, clicked: false, key: 1},
          {type: "grain", color: "#d6bb22", calories: 100, clicked: false, key: 2},
          {type: "veg", color: "#78caab",  calories: 50, clicked: false, key: 3},
          {type: "veg", color: "#78caab",  calories: 50, clicked: false, key: 4},
          {type: "veg", color: "#78caab",  calories: 50, clicked: false, key: 5},
          {type: "veg", color: "#78caab",  calories: 50, clicked: false, key: 6},
          {type: "protein", color: "#c45e38", calories: 50, clicked: false, key: 7},
          {type: "protein", color: "#c45e38", calories: 50, clicked: false, key: 8},
          {type: "protein", color: "#c45e38", calories: 50, clicked: false, key: 9},
          {type: "protein", color: "#c45e38", calories: 50, clicked: false, key: 10},
          {type: "protein", color: "#c45e38", calories: 50, clicked: false, key: 11},
          {type: "protein", color: "#c45e38", calories: 50, clicked: false, key: 12},
          {type: "fruit", color: "rgb(255, 193, 193)", "calories": 50, clicked: false, key: 13},
          {type: "fruit", color: "rgb(255, 193, 193)", "calories": 50, clicked: false, key: 14},
          {type: "fruit", color: "rgb(255, 193, 193)", "calories": 50, clicked: false, key: 15},
          {type: "fruit", color: "rgb(255, 193, 193)", "calories": 50, clicked: false, key: 16},
          {type: "fat", color: "rgba(255, 170, 43, 0.925)", "calories": 50, clicked: false, key: 17},
          {type: "fat", color: "rgba(255, 170, 43, 0.925)", "calories": 50, clicked: false, key: 18},
          {type: "fat", color: "rgba(255, 170, 43, 0.925)", "calories": 50, clicked: false, key: 19},
          {type: "fat", color: "rgba(255, 170, 43, 0.925)", "calories": 50, clicked: false, key: 20},
        ],
        checked: 0,
        total: 1200,
      }
    
    toggleBoxHandler = (key, calories, clicked) => {
      let checkedCount = this.state.checked;
      let toggledClick = clicked;
      let updatedBoxes = [...this.state.boxes]
      //determine if it's toggled on/off (checked/unchecked)
      if (toggledClick) {
        checkedCount-= calories;
      } else {
        checkedCount+= calories;
      }
      updatedBoxes[key]["clicked"] = !toggledClick;

      this.setState({checked: checkedCount, boxes: updatedBoxes})
    }

    calculateTotal = () => {
      let boxCopy = [...this.state.boxes]
        let total = boxCopy.reduce((acc, ele) => {
            return acc + (ele.calories)
        }, 0)
        //TO DO: instead of return total, set state.total to new total and then reference this.state.total in the div below
        return total;
    }
    render () {
        return (
            <div>
                <Rows toggleBox={this.toggleBoxHandler} boxes={this.state.boxes} checked={this.state.checked} total={this.state.total} />
                <div class="displayTotal">Today: {this.state.checked}/{this.calculateTotal()}</div>
            </div>
        )
    }
}

export default Board;