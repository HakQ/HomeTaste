import React, { Component } from 'react';
import uuid from 'uuid';
//import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

//import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../../App.css';

class RecipeForm extends Component {
  constructor(){
    super();
    this.state = {
      Recipes: [],
      todos:[]
    }
  }

  getRecipes(){
    this.setState({Recipes: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  componentWillMount(){
    this.getRecipes();
  }


  handleAddRecipe(Recipe){
    let Recipes = this.state.Recipes;
    Recipes.push(Recipe);
    this.setState({Recipes:Recipes});
  }

  handleDeleteRecipe(id){
    let Recipes = this.state.Recipes;
    let index = Recipes.findIndex(x => x.id === id);
    Recipes.splice(index, 1);
    this.setState({Recipes:Recipes});
  }

  render() {
    return (
      <div className="App" id="addRecipe">
        <AddRecipe addRecipe={this.handleAddRecipe.bind(this)} />
        {/* <Recipes Recipes={this.state.Recipes} onDelete={this.handleDeleteRecipe.bind(this)} /> */}
        <hr />
      </div>
    );
  }

}

export default RecipeForm;
