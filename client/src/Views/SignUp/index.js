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

  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //     if (this.state.title && this.state.author) {
  //       API.saveBook({
  //         title: this.state.title,
  //         author: this.state.author,
  //         synopsis: this.state.synopsis
  //       })
  //         .then(res => this.loadBooks())
  //         .catch(err => console.log(err));
  //     }
  //   };

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
            placeholder="Name (required)"
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
          />
          <FormBtn
            disabled={!(this.state.userEmail && this.state.userPassword)}
            // onClick={this.handleFormSubmit}
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
