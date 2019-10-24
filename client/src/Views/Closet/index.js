import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";
import { Input, TextArea, FormBtn } from "../../Components/Form";

class Closet extends Component {
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
          <h1>My Closet</h1>
        </Jumbotron>
        <Row>
          <Col size="md-6">
            <h2>Outfit</h2>
          </Col>
          <Col size="md-6">
            <h2>Outfit</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <h2>Outfit</h2>
          </Col>
          <Col size="md-6">
            <h2>Outfit</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Closet;
