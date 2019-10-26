import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import ClothingItem from "../../Components/ClothingItem";

class Outfit extends Component {
  state = {
    clothingType: "",
    clothingItem: "",
    tops: [],
    bottoms: [],
    shoes: [],
    outerwear: [],
    outfit: []
  };
  componentDidMount() {
    let idParams = this.props.match.params.id;
    let clothingType = this.props.match.params.clothingType;
    this.setState({ clothingType: clothingType });
    this.loadClothingItem(clothingType, idParams, () => {
      this.loadClothes();
    });
  }

  loadClothingItem = (clothingType, idParams, cb) => {
    clothingType == "Tops"
      ? API.getTopById(idParams)
          .then(res => this.setState({ clothingItem: res.data }))
          .then(API.getBottoms())
          .catch(err => console.log(err))
      : clothingType == "Bottoms"
      ? API.getBottomById(idParams)
          .then(res => this.setState({ clothingItem: res.data }))
          .catch(err => console.log(err))
      : clothingType == "Shoes"
      ? API.getShoeById(idParams)
          .then(res => this.setState({ clothingItem: res.data }))
          .catch(err => console.log(err))
      : clothingType == "Outerwear"
      ? API.getOuterwearById(idParams)
          .then(res => this.setState({ clothingItem: res.data }))
          .catch(err => console.log(err))
      : console.log("no clothing type specified");

    console.log(idParams);
    cb();
  };

  // load all clothes into state
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
          <h1>Four algorithmically generated outfits, yo</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-6">
              <h2>Top</h2>
              <ClothingItem
                imageURL={
                  this.state.tops.length && this.state.clothingType == "Tops"
                    ? this.state.clothingItem.imageURL
                    : this.state.tops.length
                    ? this.state.tops[0].imageURL
                    : "error"
                }
              />
            </Col>
            <Col size="md-6">
              <h2>Bottom</h2>{" "}
              <ClothingItem
                imageURL={
                  this.state.bottoms.length &&
                  this.state.clothingType == "Bottoms"
                    ? this.state.clothingItem.imageURL
                    : this.state.bottoms.length
                    ? this.state.bottoms[0].imageURL
                    : "error"
                }
              />
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <h2>Outerwear</h2>{" "}
              <ClothingItem
                imageURL={
                  this.state.outerwear.length &&
                  this.state.clothingType == "Outerwear"
                    ? this.state.clothingItem.imageURL
                    : this.state.outerwear.length
                    ? this.state.outerwear[0].imageURL
                    : "error"
                }
              />
            </Col>
            <Col size="md-6">
              <h2>Shoe</h2>{" "}
              <ClothingItem
                imageURL={
                  this.state.shoes.length && this.state.clothingType == "Shoes"
                    ? this.state.clothingItem.imageURL
                    : this.state.shoes.length
                    ? this.state.shoes[0].imageURL
                    : "error"
                }
              />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Outfit;
