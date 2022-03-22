import "./App.css";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img src="data:image/png;base64,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" />
        <h1>A Music</h1>
        <h1>Create Playlist</h1>
      </div>
      <div>
        <img
          src={data.album.images[0].url}
          width="300"
          height="300"
          className="rotate"
        />
      </div>
      <div>
        <h2>{data.name}</h2>
        <h3>{data.album.name}</h3>
        <p>{data.artists[0].name}</p>
        <button>
          <a href={data.album.artists[0].external_urls.spotify}>select</a>
        </button>
      </div>
    </div>
  );
}

export default App;