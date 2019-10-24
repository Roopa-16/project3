import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";
import { Input, TextArea, FormBtn } from "../../Components/Form";

class ClothingDetail extends Component {
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
          <h1>Clothing Detail</h1>
        </Jumbotron>
        <Row>
          <div className="col align-self-center">Clothing</div>
        </Row>
        <Container>
          <Row>
            <Col size="md-6">Shirt/Pant/Outerwear/Shoe 1</Col>
            <Col size="md-6">Shirt/Pant/Outerwear/Shoe 2</Col>
          </Row>
          <Row>
            <Col size="md-6">Shirt/Pant/Outerwear/Shoe 3</Col>
            <Col size="md-6">Shirt/Pant/Outerwear/Shoe 4</Col>
          </Row>
        </Container>
        <Row>
          <div className="col align-self-center">Color Picker / Slider</div>
        </Row>
        <Row>
          <div className="col align-self-center">
            <button>GO FISH</button>
          </div>
        </Row>
      </Container>
    );
  }
}

export default ClothingDetail;
