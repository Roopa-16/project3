import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import ClothingItem from "../../Components/ClothingItem";
const hardCodedUserId = "5db75b79c9e53d19ad99b030";

class Closet extends Component {
  state = {
    outfitsInitial: [],
    outfits: []
  };

  componentDidMount() {
    this.loadOutfits(hardCodedUserId);
  }

  loadOutfits = userId => {
    let array = [];
    console.log(userId);
    API.loadOutfits(userId)
      .then(res =>
        // this.setState({ outfitsInitial: res.data.outfits })
        res.data.outfits.map(el =>
          API.getOutfit(el).then(res => {
            array.push(res.data);
          })
        )
      )
      .then(this.setState({ outfits: array }));
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>My Closet</h1>
        </Jumbotron>

        <Row>
          {this.state.outfits ? console.log(this.state.outfits) : ""}
          {this.state.outfits
            ? this.state.outfits.map(el => {
                console.log(el);
                {
                  /* return (
                  <Col size="md-6">
                    <Row>
                      <Col size="md-6">
                        {" "}
                        <ClothingItem
                          imageURL={el.top ? el.top.imageURL : ""}
                        />
                      </Col>
                      <Col size="md-6">
                        {" "}
                        <ClothingItem
                          imageURL={el.bottom ? el.bottom.imageURL : ""}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col size="md-6">
                        {" "}
                        <ClothingItem
                          imageURL={el.outerwear ? el.outerwear.imageURL : ""}
                        />
                      </Col>
                      <Col size="md-6">
                        {" "}
                        <ClothingItem
                          imageURL={el.shoes ? el.shoes.imageURL : ""}
                        />
                      </Col>
                    </Row>
                  </Col>
                ); */
                }
              })
            : ""}
        </Row>
      </Container>
    );
  }
}

export default Closet;
