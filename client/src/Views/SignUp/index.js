import React, { Component } from "react";
import DeleteBtn from "../../Components/DeleteBtn";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";
import { Input, TextArea, FormBtn } from "../../Components/Form";

class LogIn extends Component {
  state = {
    userName: "",
    userEmail: "",
    userPassword: ""
  };

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = () => {

  // }

  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleFormSubmit = userObj => {
    console.log(userObj);
    API.createUser(userObj)
      .then(function(response) {
        alert(response.data.message);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  checkFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName.length >= 8 && this.state.userPassword.length >= 8) {
      if (!this.state.userPassword.split("").includes(" ")) {
        if (
          this.validateEmail(this.state.userEmail) &&
          !this.state.userEmail.split("").includes(" ")
        ) {
          if (this.state.userName.split("").includes(" ")) {
            alert("Username Can't contain spaces");
          } else {
            const newUser = {
              email: this.state.userEmail,
              username: this.state.userName,
              password: this.state.userPassword
            };
            this.handleFormSubmit(newUser);
          }
        } else {
          alert("email is invalid");
        }
      } else {
        alert("Password can't contain spaces.");
      }
    } else {
      alert("You password and username have to be at least 8 characters.");
    }
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>LogIn</h1>
        </Jumbotron>
        <form>
          <Input
            value={this.state.userName}
            onChange={this.handleInputChange}
            name="userName"
            placeholder="Username (required)"
          />
          <Input
            value={this.state.userEmail}
            onChange={this.handleInputChange}
            name="userEmail"
            placeholder="Email Address"
          />
          <Input
            value={this.state.userPassword}
            onChange={this.handleInputChange}
            name="userPassword"
            placeholder="Password"
            type="password"
          />
          <FormBtn
            disabled={
              !(
                this.state.userEmail &&
                this.state.userPassword &&
                this.state.userName
              )
            }
            onClick={this.checkFormSubmit}
          >
            Log in
          </FormBtn>
        </form>
        <p>Already have an account? </p>
        <Link to="/LogIn">Sign In Here</Link>
      </Container>
    );
  }
}

export default LogIn;
