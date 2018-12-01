import React, { Component } from 'react';

class RecipeItem extends Component {
  deleteRecipe(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Recipe">
        <strong>{this.props.Recipe.title}</strong>: {this.props.Recipe.calories} -  {this.props.Recipe.startTime} - {this.props.Recipe.servings} - {this.props.Recipe.comments} - {this.props.Recipe.descriptions} - {this.props.Recipe.instructions} - {this.props.Recipe.category} <a href="#" onClick={this.deleteRecipe.bind(this, this.props.Recipe.id)}>X</a>
      </li>
    );
  }
}


export default RecipeItem;
