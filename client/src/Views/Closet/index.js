import React, { Component } from "react";
import { Col, Row, Container } from "../../Components/Grid";
import ClothingItem from "../../Components/ClothingItem";
import API from "../../utils/API";
import { getSession } from "../../utils/Session";
import Title from "../../Components/TitleAnimation";

class Closet extends Component {
  state = {
    outfits: [],
    user: "",
    currentUser: "",
    newOutfit: ""
  };

  async componentDidMount() {
    let currentUser = await getSession();
    // if the user somehow made it to this page but should be going to their own closet
    if (currentUser.id === this.props.match.params.id) {
      window.location.replace("/MyCloset");
    }
    // sets the current user in state
    API.getUser(currentUser.id).then(res => {
      this.setState({ currentUser: res.data });
    });

    if (this.props.match.params.id) {
      let otherUserId = this.props.match.params.id;
      // set otherUserId to user id in url params... this.state.currentUser is passed in to the save outfit function when we save someone else's outfit
      // load other users outfits, since we are looking at someone elses closet
      this.reloadOutfits(otherUserId);
      // get other users data
      API.getUser(otherUserId).then(res => {
        this.setState({ user: res.data });
      });

      return;
    }
    {
      console.log("better do this or else!");
    }
  }

  // reloads outfits
  reloadOutfits = someId => {
    this.setState({ outfits: [] });
    API.getUser(someId)
      .then(response => {
        response.data.outfits.map(el => {
          API.getOutfit(el._id).then(res => {
            this.setState({ outfits: this.state.outfits.concat([res.data]) });
          });
        });
      })
      .catch(err => console.log(err));
  };

  createNewOutfit = (outfit, cb) => {
    let top = outfit.top._id;
    let bottom = outfit.bottom._id;
    let shoe = outfit.shoe._id;
    let outerwear = outfit.outerwear._id;

    this.setState(
      state => ({
        newOutfit: {
          ...state.newOutfit,
          top: top,
          bottom: bottom,
          shoe: shoe,
          outerwear: outerwear,
          user: this.state.currentUser._id
        }
      }),
      () => cb()
    );
  };

  saveOutfit = userId => {
    let newOutfit = this.state.newOutfit;
    API.saveOutfit(userId, newOutfit);
  };

  // simply changes the class and inner html of the SAVE button after it is clicked
  savedStyles(e) {
    e.preventDefault();
    e.target.className = "btn btn-success";
    e.target.innerHTML = "SAVED!";
    e.target.style.pointerEvents = "none";
  }

  render() {
    return (
      <>
        <Container>
          <Title>
            <h1>{this.state.user.username}'s Closet</h1>
          </Title>
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
                      class="btn btn-primary"
                      onClick={e => {
                        this.savedStyles(e);
                        this.createNewOutfit(outfit, () => {
                          this.saveOutfit(this.state.currentUser._id);
                        });
                      }}
                    >
                      SAVE OUTFIT
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
