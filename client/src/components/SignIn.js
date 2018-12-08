import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    console.log('----id in props', this.props.userId)
    if(this.props.userId){
      console.log('-----logged in---')
      return <Redirect to= "/" />
    }
    return (
      <div className="container">
        <div className="row justify-content-center p-5" >

          <div className="col-12 col-lg-6">

            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange = {this.props.onEmailChange} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange = {this.props.onPasswordChange} />
              </div>
              <button type="submit" class="btn btn-primary" onClick ={this.props.handleLogin}>Submit</button>
            </form>

          </div>

        </div>

      </div>
    );
  }
}


export default SignIn;