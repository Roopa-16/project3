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
    return clothingType;
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
              {this.clothingType == "Tops" ? "tops!" : "not tops"}
            </Col>
            <Col size="md-6">Shirt/Pant/Outerwear/Shoe 2</Col>
          </Row>
          <Row>
            <Col size="md-6">Shirt/Pant/Outerwear/Shoe 3</Col>
            <Col size="md-6">Shirt/Pant/Outerwear/Shoe 4</Col>
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
