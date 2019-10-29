import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import ClothingItem from "../../Components/ClothingItem";

class Home extends Component {
  state = {
    tops: [],
    bottoms: [],
    shoes: [],
    outerwear: []
  };

  componentDidMount() {
    this.loadClothes();
  }

  loadClothes = () => {
    API.getTops()
      .then(res => this.setState({ tops: res.data }))
      .catch(err => console.log(err));
    API.getBottoms()
      .then(res => this.setState({ bottoms: res.data }))
      .catch(err => console.log(err));
    API.getShoes()
      .then(res => this.setState({ shoes: res.data }))
      .catch(err => console.log(err));
    API.getOuterwear()
      .then(res => this.setState({ outerwear: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Go fishing for style</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-6">
              <h2>Top</h2>
              <Link to="/ClothingDetail/Tops">
                <ClothingItem
                  imageURL={
                    this.state.tops.length
                      ? this.state.tops[0].imageURL
                      : "no-image"
                  }
                />
              </Link>
            </Col>
            <Col size="md-6">
              <h2>Bottom</h2>
              <Link to="/ClothingDetail/Bottoms">
                <ClothingItem
                  imageURL={
                    this.state.bottoms.length
                      ? this.state.bottoms[0].imageURL
                      : "no-image"
                  }
                />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <h2>Outerwear</h2>
              <Link to="/ClothingDetail/Outerwear">
                <ClothingItem
                  imageURL={
                    this.state.outerwear.length
                      ? this.state.outerwear[0].imageURL
                      : "no-image"
                  }
                />
              </Link>
            </Col>
            <Col size="md-6">
              <h2>Shoe</h2>
              <Link to="/ClothingDetail/Shoes">
                <ClothingItem
                  imageURL={
                    this.state.shoes.length
                      ? this.state.shoes[0].imageURL
                      : "no-image"
                  }
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;
