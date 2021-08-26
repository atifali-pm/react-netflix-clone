import React from 'react';
import './App.css';
import Row from "./Row";
import requests from './request';

function App() {
  return (
    <div className="App">
      <div className="app">
        <h1>Hey world</h1>
          <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      </div>
    </div>
  );
}

export default App;
