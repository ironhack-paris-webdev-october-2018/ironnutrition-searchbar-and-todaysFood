import React, { Component } from 'react';

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      name: '',
      calories: 0,
      image: '',
      quantity: 1
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {onSubmit} = this.state;
    onSubmit(this.state);   
    this.setState(this.getInitialState())  
  }

  render() { 
    const {name, calories, image, quantity} = this.state;
    return ( 
      <form  onSubmit={(event)=>this.handleFormSubmit(event)}>
       <label>
          Name:
          <input type="text" name="name" value={name} onChange={event => this.handleChange(event)} />
        </label>
        <label>
          Calories:
          <input type="number" name="calories" value={calories} onChange={event => this.handleChange(event)} />
        </label>
        <label>
          ImageUrl:
          <input type="text" name="image" value={image} onChange={event => this.handleChange(event)} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={quantity} onChange={event => this.handleChange(event)} />
        </label>
        <button>Add a food</button>
      </form>
     );
  }
}
 
export default AddFood;