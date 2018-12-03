import React, { Component } from 'react';
import FoodBox from "./Components/FoodBox"
import AddFood from "./Components/AddFood"
import Search from "./Components/Search"
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import TodaysFood from './Components/TodaysFood';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      myFoods : foods,
      isAddingFood: false,
      searchString: "",
      todaysFood: []
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

  handleSearch(event){
    const {value} = event.target;
    const filteredArray = foods.filter(
        (oneFood)=> oneFood.name.toLowerCase().includes(value.toLowerCase())
        )
    this.setState({searchString: value, myFoods: filteredArray})
  }

  addToTodaysFood(food){
    const {todaysFood} = this.state;
    const todaysFoodCopy = [...todaysFood];
    todaysFoodCopy.push(food);
    this.setState({todaysFood: todaysFoodCopy})
  }

  render() { 
    const {myFoods, isAddingFood, searchString, todaysFood} = this.state;
    return ( 
      <div>
        <Search searchFunction={(event)=> this.handleSearch(event)} value={searchString}/>
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
                                        onPlusButton={(food)=> this.addToTodaysFood(food)}
                                      />)}
        <TodaysFood todaysFoodList={todaysFood}/>
      </div>
     );
  }
}
 
export default App;
