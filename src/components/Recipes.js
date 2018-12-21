import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

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