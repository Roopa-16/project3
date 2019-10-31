import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../../Components/Grid";
import { Input, FormBtn } from "../../Components/Form";
import API from "../../utils/API"
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
          alert(response.data.message);
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
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Log In</h1>
        </Jumbotron>
        <br />
        <Row className="justify-content-center">
          <Col size="md-6">
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
                type="Password"
              />
              <FormBtn
                disabled={!(this.state.userEmail && this.state.userPassword)}
                onClick={this.handleFormSubmit}
              >
                Log in
              </FormBtn>
            </form>

            <p>
              Don't have an account?
              <br />
              <Link to="/SignUp"> Sign Up Here</Link>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LogIn;
