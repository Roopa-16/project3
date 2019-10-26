import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import ClothingItem from "../../Components/ClothingItem";

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
      <Container fluid>
        <Jumbotron>
          <h1>Clothing Detail</h1>
        </Jumbotron>
        <Row>
          <div className="col align-self-center">Choose your style</div>
        </Row>
        <Container>
          <Row>
            <Col size="md-6">
              {this.state.clothingType == "Tops" ? (
                <Link
                  to={`/Outfit/${
                    this.state.tops.length ? this.state.tops[0]._id : ""
                  }`}
                >
                  <ClothingItem
                    imageURL={
                      this.state.tops.length
                        ? this.state.tops[0].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Bottoms" ? (
                <Link
                  to={`/Outfit/${
                    this.state.bottoms.length ? this.state.bottoms[0]._id : ""
                  }`}
                >
                  <ClothingItem
                    imageURL={
                      this.state.bottoms.length
                        ? this.state.bottoms[0].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Outerwear" ? (
                <Link
                  to={`/Outfit/${
                    this.state.outerwear.length
                      ? this.state.outerwear[0]._id
                      : ""
                  }`}
                >
                  {" "}
                  <ClothingItem
                    imageURL={
                      this.state.outerwear.length
                        ? this.state.outerwear[0].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Shoes" ? (
                <Link
                  to={`/Outfit/${
                    this.state.shoes.length ? this.state.shoes[0]._id : ""
                  }`}
                >
                  <ClothingItem
                    imageURL={
                      this.state.shoes.length
                        ? this.state.shoes[0].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : (
                "clothing item not found"
              )}
            </Col>
            <Col size="md-6">
              {this.state.clothingType == "Tops" ? (
                <Link
                  to={`/Outfit/${
                    this.state.tops.length ? this.state.tops[1]._id : ""
                  }`}
                >
                  {" "}
                  <ClothingItem
                    imageURL={
                      this.state.tops.length
                        ? this.state.tops[1].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Bottoms" ? (
                <Link
                  to={`/Outfit/${
                    this.state.bottoms.length ? this.state.bottoms[1]._id : ""
                  }`}
                >
                  <ClothingItem
                    imageURL={
                      this.state.bottoms.length
                        ? this.state.bottoms[1].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Outerwear" ? (
                <Link
                  to={`/Outfit/${
                    this.state.outerwear.length
                      ? this.state.outerwear[1]._id
                      : ""
                  }`}
                >
                  {" "}
                  <ClothingItem
                    imageURL={
                      this.state.outerwear.length
                        ? this.state.outerwear[1].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Shoes" ? (
                <Link
                  to={`/Outfit/${
                    this.state.shoes.length ? this.state.shoes[1]._id : ""
                  }`}
                >
                  {" "}
                  <ClothingItem
                    imageURL={
                      this.state.shoes.length
                        ? this.state.shoes[1].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : (
                "clothing item not found"
              )}
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              {this.state.clothingType == "Tops" ? (
                <Link
                  to={`/Outfit/${
                    this.state.tops.length ? this.state.tops[2]._id : ""
                  }`}
                >
                  <ClothingItem
                    imageURL={
                      this.state.tops.length
                        ? this.state.tops[2].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Bottoms" ? (
                <Link
                  to={`/Outfit/${
                    this.state.bottoms.length ? this.state.bottoms[2]._id : ""
                  }`}
                >
                  <ClothingItem
                    imageURL={
                      this.state.bottoms.length
                        ? this.state.bottoms[2].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Outerwear" ? (
                <Link
                  to={`/Outfit/${
                    this.state.outerwear.length
                      ? this.state.outerwear[2]._id
                      : ""
                  }`}
                >
                  {" "}
                  <ClothingItem
                    imageURL={
                      this.state.outerwear.length
                        ? this.state.outerwear[2].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Shoes" ? (
                <Link
                  to={`/Outfit/${
                    this.state.shoes.length ? this.state.shoes[2]._id : ""
                  }`}
                >
                  {" "}
                  <ClothingItem
                    imageURL={
                      this.state.shoes.length
                        ? this.state.shoes[2].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : (
                "clothing item not found"
              )}
            </Col>
            <Col size="md-6">
              {this.state.clothingType == "Tops" ? (
                <Link
                  to={`/Outfit/${
                    this.state.tops.length ? this.state.tops[3]._id : ""
                  }`}
                >
                  <ClothingItem
                    imageURL={
                      this.state.tops.length
                        ? this.state.tops[3].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Bottoms" ? (
                <Link
                  to={`/Outfit/${
                    this.state.bottoms.length ? this.state.bottoms[3]._id : ""
                  }`}
                >
                  <ClothingItem
                    imageURL={
                      this.state.bottoms.length
                        ? this.state.bottoms[3].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Outerwear" ? (
                <Link
                  to={`/Outfit/${
                    this.state.outerwear.length
                      ? this.state.outerwear[3]._id
                      : ""
                  }`}
                >
                  {" "}
                  <ClothingItem
                    imageURL={
                      this.state.outerwear.length
                        ? this.state.outerwear[3].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : this.state.clothingType == "Shoes" ? (
                <Link
                  to={`/Outfit/${
                    this.state.shoes.length ? this.state.shoes[3]._id : ""
                  }`}
                >
                  {" "}
                  <ClothingItem
                    imageURL={
                      this.state.shoes.length
                        ? this.state.shoes[3].imageURL
                        : "no-image"
                    }
                  />
                </Link>
              ) : (
                "clothing item not found"
              )}
            </Col>
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
