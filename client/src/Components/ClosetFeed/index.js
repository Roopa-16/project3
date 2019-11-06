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
    this.state.outfitArray = [];
    API.getMongoClosetFeed()
      .then(res => {
        console.log(`res on 16 ${res.data}`);
        this.setState({ outfitArray: res.data });
      })
      .catch(err => console.log(err));

    subscribeToClosetFeed((err, res) => {
      if (this.state.outfit && this.state.outfit._id === res._id) {
      } else if (!this.state.outfit) {
        API.getOutfit(res._id)
          .then(outfit => {
            this.setState(
              {
                outfit: outfit.data
              },
              () => {
                let outfitObj = this.state.outfit;
                console.log(`line 33`);
                console.log(outfitObj);
                // IF THE INITIAL ARRAY STATE DOESN'T CONTAIN AN OUTFIT WITH A KEY THAT HAS THE SAME ID AS THE CURRENT OUTFIT... THEN ADD THAT OUTFIT
                if (this.state.outfitArray.some(e => e.key === outfitObj._id)) {
                  console.log("dont do anything");
                } else {
                  this.addToClosetFeed(outfitObj);
                  this.setState({
                    outfitArray: this.state.outfitArray.concat(outfitObj)
                  });
                }
              }
            );
          })
          .catch(err => console.log(err));
      }
      if (err) {
        console.log(err);
      }
    });
  }

  addToClosetFeed = outfitObj => {
    let [top, bottom, outerwear, shoe, user, key] = [
      outfitObj.top._id,
      outfitObj.bottom._id,
      outfitObj.outerwear._id,
      outfitObj.shoe._id,
      outfitObj.user._id,
      outfitObj._id
    ];
    console.log(top, bottom);

    API.addToClosetFeed({
      top: top,
      bottom: bottom,
      outerwear: outerwear,
      shoe: shoe,
      user: user,
      key: key
    })
      .then(res => {
        console.log(`add to closet feed response ${res}`);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        {/* <button
          onClick={
            this.state.outfit ? this.addToClosetFeed(this.state.outfit) : ""
          }
        >
          add this outfit
        </button> */}
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
