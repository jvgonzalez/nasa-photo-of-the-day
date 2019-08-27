import React from "react";
import axios from 'axios';
import "./App.css";
import PhotoCard from "./components/PhotoCard"

function App() {
  console.log("top");
  axios.get(" https://api.nasa.gov/planetary/apod")
  .then(res => {
    console.log(res);
  })
  console.log("bottom");
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoCard  title="Props title" url="this is not a url"
      explanation= "some explanation" />
    </div>
  );
}

export default App;
