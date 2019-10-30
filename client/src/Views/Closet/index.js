import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import { Col, Row, Container } from "../../Components/Grid";

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
