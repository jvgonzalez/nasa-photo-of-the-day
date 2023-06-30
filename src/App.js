import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.scss";
import PhotoCard from "./components/PhotoCard"

function App() {
  
  const [data, setData] = useState({});
  useEffect(() => {
    
  
  
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => {
    console.log(res.data);
    setData(res.data);
  });
  }, []);
  
  return (
    <div className="App">
      <div className= "photo-cards"> 
      <PhotoCard  title={data.title} url={data.url}
      explanation= {data.explanation} />
     </div>
    </div>
  );
}

export default App;
