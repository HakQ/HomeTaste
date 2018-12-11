import React from 'react'
import Recipes from './Recipes';
//import homepage from './images/homepage';
import homepage from '../components/images/homepage.jpeg';
import './Home.css'


let backimg = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${homepage})`
};


export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            recipes: []
        };
    }

   foodSearch(e){
        if(e.target.value.length === 0){
            window.location.reload();
        }

        const recipeName = e.target.value;
        e.preventDefault();
        // const API_KEY = "d6f0630f1a2543e76bbf7b3ab2b20d8a";
        const API_KEY = "248278769b9624d2a230cd9fcf96a4d4";

        const API_CALL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`;
         fetch(API_CALL)
        .then((response) => {      
            if(response.status === 200){
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
                <form style={backimg}>
                    <label><h1 className={"welcomeTitle"}>Home Taste Recipe Search</h1></label>   
                </form>  
                <div className={"col-md-8 centerMe"}>
                    <input className={"form-control"} type="text" onChange={(e) => this.foodSearch(e)} placeholder=" Search for your food"/>
                </div>             
                <Recipes recipes={this.state.recipes}/>
            </div>
        )
    }
}