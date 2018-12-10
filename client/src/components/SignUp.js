import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class SignUp extends Component {

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
                <label for="exampleInputFirstName">First Name</label>
                <input type="first_name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First" onChange = {this.props.onFirstChange} />
                <small id="emailHelp" class="form-text text-muted">Enter your first name.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputLastName">Last Name</label>
                <input type="last_name" class="form-control" id="exampleInputPassword1" placeholder="Last" onChange = {this.props.onLastChange} />
                <small id="emailHelp" class="form-text text-muted">Enter your last name.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputUsername">Username</label>
                <input type="username" class="form-control" id="exampleInputPassword1" placeholder="Username" onChange = {this.props.onUsernameChange} />
                <small id="emailHelp" class="form-text text-muted">Enter a desired username.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail">Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="example@example.com" onChange = {this.props.onEmailChange} />
                <small id="emailHelp" class="form-text text-muted">Enter your email address.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="******" onChange = {this.props.onPasswordChange} />
                <small id="emailHelp" class="form-text text-muted">Enter a desired password.</small>
              </div>
              <button type="submit" class="btn btn-primary" onClick ={this.props.handleSignUp}>Submit</button>
            </form>

          </div>

        </div>

      </div>
    );
  }
}


export default SignUp;