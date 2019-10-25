import React from "react";

const ClothingItem = props => {
  return (
    <div>
      <img src={`/assets/${props.imageURL}`}></img>
    </div>
  );
};

export default ClothingItem;
