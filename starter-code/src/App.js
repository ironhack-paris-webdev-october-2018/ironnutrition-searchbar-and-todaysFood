import React, { Component } from 'react';
import FoodBox from "./Components/FoodBox"
import AddFood from "./Components/AddFood"
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      myFoods : foods,
      isAddingFood: false,
     }
  }

  showAddFoodForm = () => {
    this.setState({isAddingFood : true})
  }

  hideFormAndAddFood=(food) => {
    const foodsNew = [...this.state.myFoods];
    foodsNew.push(food);
    
    this.setState({
      isAddingFood: false,
      myFoods: foodsNew,
    })
  }

  handleQuantityChange = (event) => {
    const {value, name} = event.target;
    const myFoodsCopy = [...this.state.myFoods]
    const updatedFood = myFoodsCopy.find((oneFood)=> oneFood.name === name);
    updatedFood.quantity = value;
    this.setState({myFoods: myFoodsCopy})
  }

  render() { 
    const {myFoods, isAddingFood} = this.state;
    return ( 
      <div>
        {
          isAddingFood ?
           <AddFood onSubmit={food => this.hideFormAndAddFood(food)} /> 
             :
           <button onClick={this.showAddFoodForm}>Add a food</button> 
        }
        {myFoods.map((oneFood, i) => <FoodBox 
                                        food={oneFood} 
                                        key={i}
                                        onQuantityChange={event => this.handleQuantityChange(event)}
                                      />)}
      </div>
     );
  }
}
 
export default App;
