import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import { Col, Row, Container } from "../../Components/Grid";
import ClothingItem from "../../Components/ClothingItem";
import API from "../../utils/API";
const hardCodedUserId = "5db75b79c9e53d19ad99b030";

class Closet extends Component {
  state = {
    outfits: [],
    user: ""
  };

  componentDidMount() {
    this.reloadOutfits(hardCodedUserId);
    let userId = this.props.match.params.id;
    API.getUser(userId).then(res => {
      this.setState({ user: res.data });
    });
    // we can get outfits from User ID in URL params
  }

  reloadOutfits = hardCodedUserId => {
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
        <Container>
          <Jumbotron>
            {this.state.user ? (
              <h1>{this.state.user.username}'s Closet</h1>
            ) : (
              "My Closet"
            )}
          </Jumbotron>
          <Row style={{ textAlign: "center" }}>
            <Col size="md-6">
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => {
                  API.deleteAllOutfitsFromUser(hardCodedUserId).then(() =>
                    this.reloadOutfits()
                  );
                }}
              >
                DELETE ALL OUTFITS FROM USER
              </button>
            </Col>
            <Col size="md-6">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  API.deleteAllOutfits().then(this.reloadOutfits())
                }
              >
                ADMIN delete all outfits from DB
              </button>
            </Col>
          </Row>
          <Row className="justify-content-center">
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
                  <Col size="md-6" className="text-center">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() =>
                        API.deleteOneOutfit(outfit._id).then(
                          this.reloadOutfits()
                        )
                      }
                    >
                      REMOVE
                    </button>
                  </Col>
                  <Col size="md-6"></Col>
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
