import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import { Link } from "react-router-dom";
import { Container } from "../../Components/Grid";
import { Input, FormBtn } from "../../Components/Form";

class LogIn extends Component {
  state = {
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
        <p>Don't have an account? </p>
        <Link to="/SignUp">Sign Up Here</Link>
      </Container>
    );
  }
}

export default LogIn;
