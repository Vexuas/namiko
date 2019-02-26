import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PopularAnime from "./components/PopularAnime";
import SeasonalAnime from "./components/SeasonalAnime";

const anime = [
  {
    id: 0,
    title: "Tate no Yuusha no Nariagari",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/548785611314561036/shield.jpg"
  }
];
class App extends Component {
  render() {
    return (
      <div className="Namiko">
        <header className="Namiko-header">
          <span className="Namiko-title">namiko - anime tracker</span>
        </header>
        <div className="Namiko-banner" />
        <main className="Namiko-content">
          <PopularAnime />
          <SeasonalAnime />
        </main>
      </div>
    );
  }
}

export default App;
