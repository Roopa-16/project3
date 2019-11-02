import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import { Col, Row, Container } from "../../Components/Grid";
import ClothingItem from "../../Components/ClothingItem";
import API from "../../utils/API";

// const hardCodedUserId = "5db75b79c9e53d19ad99b030";
import { getSession, logOut } from "../../utils/Session";
import Title from "../../Components/TitleAnimation"
let userId;
let otherUserId;

class Closet extends Component {
  state = {
    outfits: [],
    user: "",
    userId: "",
    otherUser: undefined
  };

  async componentDidMount() {
    let currentUser = await getSession();

    if (this.props.match.params.id) {
      let otherUserId = this.props.match.params.id;
      this.setState({ userId: currentUser.id }, () => {
        this.reloadOutfits(otherUserId);
        API.getUser(otherUserId).then(res => {
          this.setState({ user: res.data, otherUser: true });
        });
      });
      return;
    } else if (currentUser) {
      console.log(currentUser.id);
      if (currentUser.id) {
        this.setState({ userId: currentUser.id }, () => {
          this.reloadOutfits(currentUser.id);
          API.getUser(currentUser.id).then(res => {
            this.setState({ user: res.data, otherUser: false });
          });
        });
      }
      return;
    } else {
      console.log("better do this or else!");
    }
  }

  reloadOutfits = someId => {
    this.setState({ outfits: [] });
    API.getUser(someId)
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

          <Title>
            {this.state.user ? (

              <h1>{this.state.user.username}'s Closet</h1>
            ) : (
              <h1>My Closet</h1>
            )}
</Title>
          <Row style={{ textAlign: "center" }}>
            {!this.state.otherUser && this.state.userId ? (
              <Col size="md-6">
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    if (window.confirm("Are you sure?")) {
                      API.deleteAllOutfitsFromUser(this.state.userId).then(() =>
                        this.reloadOutfits()
                      );
                    } else {
                    }
                  }}
                >
                  Clean my closet
                </button>
              </Col>
            ) : (
              ""
            )}

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
                    {this.state.otherUser && this.state.userId ? (
                      <>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() =>
                            API.saveOutfit(this.state.userId, outfit).then(
                              alert(
                                `saved to users closet who has an id of ${this.state.userId}`
                              )
                            )
                          }
                        >
                          SAVE
                        </button>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
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
