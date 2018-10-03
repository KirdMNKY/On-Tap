import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import './Signup.css';
const cheers = require('../../images/cheers.jpg');
class Signup extends Component {

    state = {
        startTime: +Date.now(),
        email: "",
        password: ""
      }
      componentDidMount(){
    
        // setInterval(() => {
        //   const timeSince = (+Date.now() - this.state.startTime)/1000;
        //   this.setState({title: `Are you still there? It's been ${timeSince} seconds`}, function(){
        //     console.log("I set the state!");
        //   })
        // }, 1000)
      }
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      }

      handleLoginButton = event => {
        event.preventDefault();
        //console.log(event.target);
        axios.post("/api/register", {email: this.state.email, password: this.state.password}).then(function(response){
          
        })
        this.setState({ email: "", password: ""});
        // Route to homepage

      }
    
      componentDidUpdate(){
        console.log();
      }


    render() {
        return (
            <div>
                <div>
                <h2>Sign up to experience greatness!</h2>
                </div>
                <div id="left">
                    <img src={ cheers } />
                </div>
                <div id="right">
                    <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input name="email" onChange={this.handleInputChange} type="email" value={this.state.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input name="password" type="password" onChange={this.handleInputChange}  class="form-control" value={this.state.password} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={this.handleLoginButton} class="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Signup;