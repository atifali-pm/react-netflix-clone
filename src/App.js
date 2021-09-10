import React from 'react';
import './App.css';
import Row from "./Row";
import requests from './request';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
      <div className="app">
        <Nav />
        <Banner />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance movies" fetchUrl={requests.fetchRomanticMovies}/>
        <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
      </div>
  );
}

export default App;
