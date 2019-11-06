import React, { Component } from "react";
import { subscribeToClosetFeed } from "../../utils/ClosetFeed";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import { timingSafeEqual } from "crypto";
class ClosetFeed extends Component {
  state = {
    outfit: false,
    outfitArray: []
  };

  componentDidMount() {
    API.getMongoClosetFeed()
      .then(res => {
        console.log(`res on 16 ${res}`);
        this.setState({ outfitArray: res.data });
      })
      .catch(err => console.log(err));
    subscribeToClosetFeed((err, res) => {
      API.getOutfit(res._id)
        .then(outfit => {
          this.setState({
            outfit: outfit.data
          });
        })
        .catch(err => console.log(err));
    });
  }

  componentDidUpdate() {
    if (!this.state.outfitArray.some(e => e._id === this.state.outfit._id)) {
      // API.addToClosetFeed({
      //   top: this.state.outfit.top,
      //   bottom: this.state.outfit.bottom,
      //   outerwear: this.state.outfit.outerwear,
      //   shoe: this.state.outfit.shoe._id,
      //   user: this.state.outfit.user._id
      // })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => console.log(err));

      this.setState({
        outfitArray: this.state.outfitArray.concat(this.state.outfit)
      });
    } else {
    }
  }

  render() {
    return (
      <>
        <div className="list-overflow-container">
          <ul className="list-group">
            {this.state.outfitArray.map(outfit =>
              Object.entries(outfit).map(entry =>
                entry[0] === "user" ? (
                  <li className="list-group-item">
                    <Link to={`Closet/${entry[1]._id}`}>
                      {entry[1].username} saved a new outfit!
                    </Link>
                  </li>
                ) : (
                  ""
                )
              )
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default ClosetFeed;
