import "./App.css";
import data from "./data.js";
import ImageAlbum from "./components/img/index.js";
import ImageHeader from "./components/imgheader/index.js";
import Button from "./components/button/index.js";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <ImageHeader />
        <h1>A Music</h1>
        <h1>Create Playlist</h1>
      </div>
      <div>
        <ImageAlbum />
        <h2>{data.name}</h2>
        <h3>{data.album.name}</h3>
        <p>{data.artists[0].name}</p>
        <Button />
      </div>
    </div>
  );
}

export default App;
