import React from 'react'
import BackgroundImage from 'react-background-image-loader';


export default class Home extends React.Component {
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