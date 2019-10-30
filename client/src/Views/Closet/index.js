import React, { Component } from "react";
import axios from "axios";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import ClothingItem from "../../Components/ClothingItem";
import { runInThisContext } from "vm";
import { stat } from "fs";
const hardCodedUserId = "5db75b79c9e53d19ad99b030";

class Closet extends Component {
  state = {
    outfits: []
  };

  componentDidMount() {
    this.reloadOutfits();
  }

  reloadOutfits = () => {
    this.setState({ outfits: [] });
    API.getUser(hardCodedUserId)
      .then(response => {
        response.data.outfits.map(el => {
          API.getOutfit(el._id).then(res => {
            console.log(res.data);
            this.setState({ outfits: this.state.outfits.concat([res.data]) });
          });
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Container fluid>
          <Jumbotron>
            <h1>My Closet</h1>
          </Jumbotron>
          <Row>
            {" "}
            {this.state.outfits.map((outfit, index) => (
              <Col size="md-6">
                <Row>
                  <Col size="md-6">
                    {" "}
                    <ClothingItem
                      imageURL={outfit.top ? outfit.top.imageURL : ""}
                    />
                  </Col>
                  <Col size="md-6">
                    {" "}
                    <ClothingItem
                      imageURL={outfit.bottom ? outfit.bottom.imageURL : ""}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col size="md-6">
                    {" "}
                    <ClothingItem
                      imageURL={
                        outfit.outerwear ? outfit.outerwear.imageURL : ""
                      }
                    />
                  </Col>
                  <Col size="md-6">
                    {" "}
                    <ClothingItem
                      imageURL={outfit.shoe ? outfit.shoe.imageURL : ""}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col size="md-6">
                    <button
                      onClick={() =>
                        API.deleteOneOutfit(outfit._id).then(
                          this.reloadOutfits()
                        )
                      }
                    >
                      DELETE
                    </button>
                  </Col>
                  <Col size="md-6">
                    <button
                      onClick={() => {
                        API.deleteAllOutfitsFromUser(hardCodedUserId);
                      }}
                    >
                      DELETE ALL OUTFITS FROM USER
                    </button>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Closet;
