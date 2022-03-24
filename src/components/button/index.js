import React from "react";
import data from "../../data.js";

const Button = () => {
  return (
    <button>
          <a href={data.album.artists[0].external_urls.spotify}>select</a>
    </button>
  );
};

export default Button;