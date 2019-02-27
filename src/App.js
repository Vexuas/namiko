import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PopularAnime from "./components/PopularAnime";
import SeasonalAnime from "./components/SeasonalAnime";

const animes = [
  {
    id: 0,
    title: "Tate no Yuusha no Nariagari",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/548785611314561036/shield.jpg"
  },
  {
    id: 1,
    title: "Tensei shitara Slime Datta Ken",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/548785635784130570/slime.jpg"
  },
  {
    id: 2,
    title: "Kemurikusa",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/548857972885815306/kemuri.jpg"
  },
  {
    id: 3,
    title: "Sword Art Online: Alicization",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549055033824772136/saoalice.jpg"
  },
  {
    id: 4,
    title: "KakeguruiXX",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549058934179233805/kakeguruixx.jpg"
  },
  {
    id: 5,
    title: "Gotoubun no Hanayome",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549061764126474261/gotoubun.jpg"
  },
  {
    id: 6,
    title: "Kaguya-sama: Love is War",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549061068190777344/kaguya.jpg"
  },
  {
    id: 7,
    title: "Dororo",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549062287361703958/dororo.jpg"
  },
  {
    id: 8,
    title: "Girly Air Force",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549922727155335178/kv2.jpg"
  },
  {
    id: 9,
    title: "Yakusoku no Neverland",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549925682273189889/img_main.jpg"
  }
];
const seasons = [
  {
    id: 0,
    title: "Winter 2018",
    img_src:
      "https://cdn.discordapp.com/attachments/535280497656332289/537162893565886464/AKGoE-girls-banner.jpg"
  },
  {
    id: 1,
    title: "Fall 2018",
    img_src:
      "https://cdn.discordapp.com/attachments/535280497656332289/537162893565886464/AKGoE-girls-banner.jpg"
  },
  {
    id: 2,
    title: "Summer 2018",
    img_src:
      "https://cdn.discordapp.com/attachments/535280497656332289/537162893565886464/AKGoE-girls-banner.jpg"
  },
  {
    id: 3,
    title: "Spring 2018",
    img_src:
      "https://cdn.discordapp.com/attachments/535280497656332289/537162893565886464/AKGoE-girls-banner.jpg"
  },
  {
    id: 4,
    title: "Winter 2017",
    img_src:
      "https://cdn.discordapp.com/attachments/535280497656332289/537162893565886464/AKGoE-girls-banner.jpg"
  },
  {
    id: 5,
    title: "Fall 2017",
    img_src:
      "https://cdn.discordapp.com/attachments/535280497656332289/537162893565886464/AKGoE-girls-banner.jpg"
  },
  {
    id: 6,
    title: "Summer 2017",
    img_src:
      "https://cdn.discordapp.com/attachments/535280497656332289/537162893565886464/AKGoE-girls-banner.jpg"
  },
  {
    id: 7,
    title: "Spring 2017",
    img_src:
      "https://cdn.discordapp.com/attachments/535280497656332289/537162893565886464/AKGoE-girls-banner.jpg"
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
          <PopularAnime anime={animes} />
          <SeasonalAnime seasons={seasons} />
        </main>
      </div>
    );
  }
}

export default App;
