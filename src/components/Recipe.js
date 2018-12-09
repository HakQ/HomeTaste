import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class Recipe extends React.Component {
 
  handleBoolean(evt){
    //evt.preventDefault();
    window.location.reload();
    
  }
    render() {
      const {recipe} = this.props;
      return (
        <div className="container">
          
            <div className="active-recipe">
              <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
              <h3 className="active-recipe__title">{ recipe.title }</h3>
              <h4 className="active-recipe__publisher">
                Publisher: <span>{ recipe.publisher }</span>
              </h4>
              <p className="active-recipe__website">Website: 
                <span><a href={recipe.f2f_url}>{recipe.f2f_url}</a></span>
              </p>
              <iframe src= {recipe.f2f_url} width="100%" height="700px"></iframe>
              <button className="active-recipe__button" onClick={this.handleBoolean}>
                Go Home
              </button>
            </div>
        </div>
      );
  }
}

  Recipe.propTypes = {
   recipe : PropTypes.object.isRequired
  }
  export default Recipe;