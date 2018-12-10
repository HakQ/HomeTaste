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

import Recipes from "./Recipes";
import apple from '../images/apple.png';
import defaultPic from '../images/default.png';
import axios from 'axios';

class AddRecipe extends Component {
  constructor(){
    super();
    this.state = {
      newRecipe:{},
      comments: null,
      title: "",
    }
  }

  onCreateRecipe = () => {
    axios.post('/recipe', {
      title: this.state.title
    }).then(res => alert('created'))
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.refs.title.value === ''){
      alert('Title is required');
    } 
    else {
      //add the info to the backEnd
      console.log(this.refs.startTime.value);
      axios.post('/recipe',{
        name: this.refs.title.value,
        calories: this.refs.calories.value,
        time: this.refs.startTime.value,
        timeEnd: this.refs.endTime.value,
        serves: this.refs.servings.value,
        minutesNeeded: this.refs.minutesNeeded.value,
        description: this.refs.comments.value,
        instruction: this.refs.instructions.value,
        ingredient: this.refs.ingredients.value,
        private: this.refs.private.value,
      }).then(res => alert('your recipe is created'));
      this.setState({newRecipe: {
        title: this.refs.title.value,
        calories: this.refs.calories.value,
        startTime: this.refs.startTime.value,
        servings: this.refs.servings.value,
        minutesNeeded: this.refs.minutesNeeded.value,
        comments: this.refs.comments.value, //this.state.comments
        instructions: this.refs.instructions.value,
        ingredients: this.refs.ingredients.value,
        private: this.refs.private.value,
        //category: this.refs.category.value
      }}, function(){
        //console.log(this.state); adding this to the the mother of this component
        this.props.addRecipe(this.state.newRecipe);
      });
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div className="row text-center">

        <div className = "col-12" >
          <h3>Add Recipe</h3>
        </div>

        <div className = "col-12">
          <form onSubmit={this.handleSubmit.bind(this)}>


           <div className = "row">

            <div className = "col-4">


            <div >
              <img src={defaultPic} height="200px" width="200px" />
            </div>

            <br />

            <div className="row justify-content-center" >
                <div className = "col-2">
                <label for="inputEmail4">Title</label>
              </div>
              <div className = "col-8">
                <input required type="text" className="form-control" id="inputEmail4" placeholder="Title" ref="title"/>
              </div>
            </div>

              <br />

              <div className="row justify-content-center" >
                <div className = "col-2">
                  <label for="inputEmail4">Calories</label>
                </div>
                <div className = "col-4">
                  <input required type="text" className="form-control" id="inputEmail4" placeholder="Calories" ref="calories"/>
                </div>
              </div>
              <br />

              <div className="row justify-content-center" >
                <div className = "col-2">
                  <label for="inputEmail4">Start Time</label>
                </div>
                <div className = "col-10">
                  <input required type="datetime-local" className="form-control" id="inputEmail4" ref="startTime"/>
                </div>
              </div>

              <br />


              <div className="row justify-content-center" >
                <div className = "col-2">
                  <label for="inputEmail4">End Time</label>
                </div>

                <div className = "col-10">
                  <input required type="datetime-local" className="form-control" id="inputEmail4" ref="endTime"/>
                </div>

              </div>

              <br />


              <div className="row justify-content-center" >
                <div className = "col-2">
                  <label for="inputEmail4">Servings</label>
                </div>
                <div className = "col-4">
                  <input required type="text" className="form-control" id="inputEmail4" placeholder="Servings" ref="servings"/>
                </div>
              </div>

              <br />

              <div className="row justify-content-center" >
                <div className = "col-2">
                  <label for="inputEmail4">Minutes Needed</label>
                </div>
                <div className = "col-4">
                  <input required type="text" className="form-control" id="inputEmail4" placeholder="30 min" ref="minutesNeeded"/>
                </div>
              </div>


              <br />

              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" ref="private"/>
                <label class="form-check-label" for="exampleCheck1">Make This Recipe Private </label>
              </div>

              <br/>

              <div className="row justify-content-center" >
                <div className = "col-10">
                  <label for="inputEmail4">Comments</label>
                  <textarea required class="form-control" id="exampleFormControlTextarea1" placeholder="Place Text Here" rows="18" ref="comments"></textarea>
                </div>
              </div>

            </div>

            <div className = "col-8">

              <br /> <br />

              <div className="row justify-content-center" >
                <div className = "col-11">
                  <label for="inputEmail4">Ingredients</label>
                  <textarea required class="form-control" id="exampleFormControlTextarea1" placeholder="Place Text Here" rows="20" ref="ingredients"></textarea>
                </div>
              </div>

              <div className="row justify-content-center" >
                <div className = "col-11">
                  <label for="inputEmail4">Instructions</label>
                  <textarea required class="form-control" id="exampleFormControlTextarea1" placeholder="Place Text Here" rows="20" ref="instructions"></textarea>
                </div>
              </div>

            </div>

           </div>

            <br /> <br />           
            <button type="submit" class="btn btn-primary">Submit</button>
            <br />

          </form>
        </div>


      <div className="Recipes">
        {Recipes}
      </div>

      </div>


    );
  }
}


export default AddRecipe;
