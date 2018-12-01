import React from 'react'
import Recipes from './Recipes';
//import homepage from './images/homepage';
import homepage from '../components/images/homepage.jpeg';

export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            recipes: []
        };
    }

    foodSearch(e){
        //https://www.food2fork.com/api/search?key={API_KEY}&q=shredded%2

        const recipeName = e.target.value;
        e.preventDefault();
        const API_KEY = "d6f0630f1a2543e76bbf7b3ab2b20d8a";
        const API_CALL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`;
         fetch(API_CALL)
        .then((response) => {      
            if(response.status === 200){
                console.log("something here "+response.json);
                return response.json();
            }     
        })
        .then((jsonData) => {
            console.log(jsonData);
            this.setState({recipes: jsonData.recipes});
        })
        .catch((error) =>{
            console.log(error);
        });
    }
    render() {
        
        return (
            <div> 
                <form>
                    <label><h1>Home Taste Recipe Search</h1></label>   
                </form>  
                <input type="text" onChange={(e) => this.foodSearch(e)}/>             
                <Recipes recipes={this.state.recipes}/>
            </div>
        )
    }
}