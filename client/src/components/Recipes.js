import React from 'react';
//import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Recipe from './Recipe';

/* this class renders the items when the user types anything on the search bar*/ 
/*let recipes = [
  {publisher: "Epicurious", f2f_url: "http://food2fork.com/view/f22836", title: "Paletas de Aguacate", source_url: "http://www.epicurious.com/recipes/food/views/Paletas-de-Aguacate-366231", recipe_id: "f22836"},
  {publisher: "All Recipes", f2f_url: "http://food2fork.com/view/2085", title: "Avocado-Lime Shrimp Salad (Ensalada de Camarones con Aguacate y Limon)", source_url: "http://allrecipes.com/Recipe/Avocado-Lime-Shrimp-S…ada-De-Camarones-Con-Aguacate-Y-Limon/Detail.aspx", recipe_id: "2085"},
  {publisher: "All Recipes", f2f_url: "http://food2fork.com/view/2085", title: "Avocado-Lime Shrimp Salad (Ensalada de Camarones con Aguacate y Limon)", source_url: "http://allrecipes.com/Recipe/Avocado-Lime-Shrimp-S…ada-De-Camarones-Con-Aguacate-Y-Limon/Detail.aspx", recipe_id: "2085"}]*/  


class Recipes extends React.Component {
  
  constructor (props){
    super(props);
    this.state = {
      isRecipeInstructionShowing:true,
      currentRecipe:null
    }
    this.handleRecipe = this.handleRecipe.bind(this);
  }

  handleRecipe(evt) {
    
    this.setState({
      isRecipeInstructionShowing: false,
      currentRecipeIndex: evt.target.attributes.getNamedItem('data-index').value
    });

  }

  renderRecipesListing = (recipes) => (
   
      <div className="container">
      <div className="row">
      {recipes.map((recipe,indx) => (
          <div 
            key={recipe.title} 
            className="col" 
            style={{ marginBottom:"2rem" }} 
            >
            <div className="recipes__box">
              <img 
                className="recipe__box-img" 
                src={recipe.image_url} 
                alt={recipe.title}/>
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                  </h5>
                  <p className="recipes__subtitle">Publisher: <span>
                    { recipe.publisher }
                  </span></p>
                </div>
                <div className="recipe_buttons">
                  <button className="btn btn-primary" onClick={this.handleRecipe} data-index={indx}>     
                  View Recipe
                  </button>
                </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
  
  render() {
    const { recipes } = this.props;
    const { currentRecipeIndex } = this.state;
    return (
        this.state.isRecipeInstructionShowing ? this.renderRecipesListing(recipes) : <Recipe recipe={recipes[currentRecipeIndex]}/>
      )
  }
}

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  currentRecipe: PropTypes.number
}

export default Recipes;