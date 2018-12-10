import React, { Component } from 'react';

import apple from '../images/apple.png'
import defaultPic from '../images/default.png'


//TODO: maybe just open it on the same page.
//need to retrieve all the recipe info and display it

//need to be able to upload image and display it

// function RecipePage({ match }) {
//   return (
//     <div>
//       <h3>ID: {match.params.id}</h3>
//     </div>
//   );
// }



export default class RecipePage extends Component {

	constructor(props){
		super(props);
	}

	render() {
		console.log(this.props)
		const {calories, category, description, ingredient, instruction, serves, name, minutesNeeded, image} = this.props.event; 
		return( 
			<div class="row text-center">

				<div class = "col-2">
					{/* EMPTY*/}
				</div>

				<div class = "col-8">

					<h1>{name}</h1>

		            <img src={require('../images/default.png')} height="200px" width="200px" />

					<h6>Calories: {calories}</h6>
					<h6>serves: {serves}</h6>
					<h6>Minutes Needed: {minutesNeeded}</h6>

					<h2> description: </h2>
					<h6>{description}</h6>


					<h2> ingredient: </h2>
					<h6>{ingredient}</h6>

					<h2> instruction: </h2>
					<h6>{instruction}</h6>

					<button onClick={() => this.props.turnOnBoolean()}>Go Back</button>

				</div>

				<div class = "col-2">
					{/* EMPTY*/}
				</div>
				
			</div>
		)
	}

}





























