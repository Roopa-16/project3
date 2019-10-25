import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";

class About extends Component {
  //   state = {};

  //   componentDidMount() {
  //     this.loadClothes();
  //   }

  //   loadClothes = () => {
  //     API.getClothes()
  //       .then(res => this.setState({ clothes: res.data }))
  //       .catch(err => console.log(err));
  //   };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>About StyleFish</h1>
        </Jumbotron>
        <Row>
          <Col size="md-12">
            <h2>Swimmin' Styles</h2>
            <p>
              Welcome to StyleFish! WE help you pick out an outfit based on 
              what clothing you choose and the color along with it. Do you need 
              an outfit for an occassion? That's okay!!! We automaticallly 
              generate an outfit for each style.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
