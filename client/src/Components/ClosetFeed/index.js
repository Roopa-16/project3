import React, { Component } from "react";
import { subscribeToClosetFeed } from "../../utils/ClosetFeed";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
class ClosetFeed extends Component {
  state = {
    outfit: false,
    outfitArray: []
  };

  componentDidMount() {
    subscribeToClosetFeed((err, res) => {
      API.getOutfit(res._id).then(outfit => {
        this.setState({
          outfit: outfit.data
        });
      });
      if (!this.state.outfitArray.some(e => e._id === this.state.outfit._id)) {
        this.setState(
          {
            outfitArray: this.state.outfitArray.concat(this.state.outfit)
          },
          () => {
            console.log(Object.entries(this.state.outfit));
          }
        );
      } else {
      }
    });
  }

  // componentDidUpdate() {
  //   if (!this.state.outfitArray.some(e => e._id === this.state.outfit._id)) {
  //     this.setState(
  //       {
  //         outfitArray: this.state.outfitArray.concat(this.state.outfit)
  //       },
  //       () => {}
  //     );
  //   } else {
  //   }
  // }

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
