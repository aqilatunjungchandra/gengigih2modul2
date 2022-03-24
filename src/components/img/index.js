import React from "react";
import data from "../../data.js";

const ImageAlbum = () => {
  return (
    <img
      src={data.album.images[0].url}
      width="300"
      height="300"
      className="rotate"
    />
  );
};



export default ImageAlbum;
