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
    userEmail: "",
    userPassword: ""
  };

  componentDidMount() {}

  logSubmit = userObj => {
    API.logUser(userObj)
      .then(function(response) {
        console.log(response);
        // alert(response.data.message);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.validateEmail(this.state.userEmail) &&
      !this.state.userEmail.split("").includes(" ")
    ) {
      const logDetails = {
      email: this.state.userEmail,
      password: this.state.userPassword
    }
    this.logSubmit(logDetails);
    } else {
      alert("Your email is invalid")
    }
    alert("you are in login")
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>LogIn</h1>
        </Jumbotron>
        <form>
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
            disabled={!(this.state.userEmail && this.state.userPassword)}
            onClick={this.handleFormSubmit}
          >
            Log in
          </FormBtn>
        </form>
        <p>Don't have an account? </p>
        <Link to="/SignUp">Sign Up Here</Link>
      </Container>
    );
  }
}

export default LogIn;
