import React from 'react'
import BackgroundImage from 'react-background-image-loader';

export default class Home extends React.Component {

    foodSearch(event){

        let url = "deac5308423f7cc3a692e3a8c9d108c6" + event.target.value;
    
        fetch(url).
        then((response) => {
            console.log(Response.status);
            
            if(Response.status == 200){
                return response.json;
            }else{
                throw "Not Found";
            }
        })
        .then((jsonData) => {
            console.log(jsonData);
            this.setState({data: jsonData});
        })
        .catch((error) =>{
            console.log(error);
        });
    }
    render() {
        return (
            <div> 
                <form>
                    <label>Home Taste Recepie Search</label>
                    <input type="text" maxLength="50" className="form-control" onChange={this.props.changeHandler}/>
                </form>
            </div>
        )
    }
}