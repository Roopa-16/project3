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
    tops: [],
    bottoms: [],
    shoes: [],
    outerwear: []
  };
  componentDidMount() {
    this.loadClothes();
  }

  // createClothesArray = (array, cb) => {
  //   API.getAll(array)
  //     .then(cb())
  //     .catch(err => console.log(err));
  // };

  loadClothes = params => {
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
    console.log(params);
  };
  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Four algorithmically generated outfits, yo</h1>
        </Jumbotron>
        <Row></Row>
      </Container>
    );
  }
}

export default Outfit;
