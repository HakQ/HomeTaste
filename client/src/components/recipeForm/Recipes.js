import React, { Component } from 'react';
import RecipeItem from './RecipeItem';

class Recipes extends Component {
  deleteRecipe(id){
    this.props.onDelete(id);
  }

  render() {
    let RecipeItems;
    if(this.props.Recipes){
      RecipeItems = this.props.Recipes.map(Recipe => {
        //console.log(Recipe);
        return (
          <RecipeItem onDelete={this.deleteRecipe.bind(this)} key={Recipe.title} Recipe={Recipe} />
        );
      });
    }
    return (
      <div className="Recipes">
        <h3>Latest Recipes</h3>
        {RecipeItems}
      </div>
    );
  }
}



export default Recipes;
