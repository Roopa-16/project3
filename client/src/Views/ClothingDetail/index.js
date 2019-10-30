import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import ClothingItem from "../../Components/ClothingItem";
import { runInThisContext } from "vm";

class ClothingDetail extends Component {
  state = {
    clothingType: "",
    tops: [],
    bottoms: [],
    shoes: [],
    outerwear: []
  };
  clothingType = "";

  componentDidMount() {
    let params = this.props.match.params.clothingType;
    let clothingType;
    console.log(params);
    switch (params) {
      case "Tops":
        this.setState({ clothingType: "Tops" }, () =>
          API.getTops()
            .then(
              res => this.setState({ tops: res.data }),
              () => {
                return (clothingType = "Tops");
              }
            )
            .catch(err => console.log(err))
        );

        break;
      case "Bottoms":
        this.setState({ clothingType: "Bottoms" }, () =>
          API.getBottoms()
            .then(
              res => this.setState({ bottoms: res.data }),
              () => {
                return (clothingType = "Bottoms");
              }
            )
            .catch(err => console.log(err))
        );

        break;
      case "Outerwear":
        this.setState({ clothingType: "Outerwear" }, () =>
          API.getOuterwear()
            .then(
              res => this.setState({ outerwear: res.data }),
              () => {
                return (clothingType = "Outerwear");
              }
            )
            .catch(err => console.log(err))
        );

        break;
      case "Shoes":
        this.setState({ clothingType: "Shoes" }, () =>
          API.getShoes()
            .then(
              res => this.setState({ shoes: res.data }),
              () => {
                return (clothingType = "Shoes");
              }
            )
            .catch(err => console.log(err))
        );

        break;
      default:
        this.setState({ clothingType: "Default" });
    }
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Choose a style</h1>
        </Jumbotron>
        <Row className="justify-content-center">
          {this.state.clothingType === "Tops" && this.state.tops.length
            ? this.state.tops.map(top => {
                return (
                  <Col size="md-3">
                    <Link to={`/Outfit/${this.state.clothingType}/${top._id}`}>
                      <ClothingItem imageURL={top.imageURL} />
                    </Link>
                  </Col>
                );
              })
            : this.state.clothingType === "Bottoms" && this.state.bottoms.length
            ? this.state.bottoms.map(bottom => {
                return (
                  <Col size="md-3">
                    <Link
                      to={`/Outfit/${this.state.clothingType}/${bottom._id}`}
                    >
                      <ClothingItem imageURL={bottom.imageURL} />
                    </Link>
                  </Col>
                );
              })
            : this.state.clothingType === "Outerwear" &&
              this.state.outerwear.length
            ? this.state.outerwear.map(outerwear => {
                return (
                  <Col size="md-3">
                    <Link
                      to={`/Outfit/${this.state.clothingType}/${outerwear._id}`}
                    >
                      <ClothingItem imageURL={outerwear.imageURL} />
                    </Link>
                  </Col>
                );
              })
            : this.state.clothingType === "Shoes" && this.state.shoes.length
            ? this.state.shoes.map(shoe => {
                return (
                  <Col size="md-3">
                    <Link to={`/Outfit/${this.state.clothingType}/${shoe._id}`}>
                      <ClothingItem imageURL={shoe.imageURL} />
                    </Link>
                  </Col>
                );
              })
            : ""}
        </Row>
      </Container>
    );
  }
}

export default ClothingDetail;
