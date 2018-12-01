import React, { Component } from 'react';
import uuid from 'uuid';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';

import apple from '../images/apple.png'


class AddRecipe extends Component {
  constructor(){
    super();
    this.state = {
      newRecipe:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newRecipe:{
        id: uuid.v4(),
        title: this.refs.title.value,
        calories: this.refs.calories.value,
        startTime: this.refs.startTime.value,
        servings: this.refs.servings.value,
        comments: this.refs.comments.value,
        descriptions: this.refs.descriptions.value,
        instructions: this.refs.instructions.value,
        ingredients: this.refs.ingredients.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addRecipe(this.state.newRecipe);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div class="row text-center">

        <div class = "col-12" >
          <h3>Add Recipe</h3>
        </div>

        <div class = "col-12">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div >
              <img src={apple} height="200px" width="200px" />
            </div>

            <br /><br />

            <div>
              <label>Title: &nbsp;</label>
              <input type="text" ref="title" />
            </div>

            <div>
              <label>Calories: &nbsp;</label>
              <input type="text" ref="calories" />
            </div>

            <div>
              <label>Start Time: &nbsp;</label>
              <input type="time" id="appt" name="appt" min="9:00" max="18:00" required ref="startTime" />
            </div>

            <div>
              <label>Servings: &nbsp;</label>
              <input type="text" ref="servings" />
            </div>

            <br /><br />

            <div>       
              <label>Comments</label><br />   
              <textarea rows="4" cols="50" name="comments" placeholder="Enter text here..." ref = "comments" />
            </div>

            <div>       
              <label>Descriptions</label><br />   
              <textarea rows="4" cols="50" name="comments" placeholder="Enter text here..." ref = "descriptions" />
            </div>

            <div>       
              <label>Instructions</label><br />   
              <textarea rows="9" cols="65" name="comments" placeholder="Enter text here..." ref = "instructions" />
            </div>

            <div>       
              <label>Ingredients</label><br />   
              <textarea rows="9" cols="65" name="comments" placeholder="Enter text here..." ref = "ingredients" />
            </div>

            <div>
              <label>Category</label><br />
              <select ref="category">
                {categoryOptions}
              </select>
            </div>
            <br />

            <input type="submit" value="Submit" />
            <br />
          </form>
        </div>
      </div>
    );
  }
}


export default AddRecipe;
