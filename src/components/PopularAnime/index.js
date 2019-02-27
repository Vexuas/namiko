import React, { Component } from "react";
import AnimeCard from "../AnimeCard";
import "./index.css";

class PopularAnime extends Component {
  render() {
    return (
      <div className="popularAnime">
        <div className="popularAnime-title">Popular Anime</div>
        <div className="popularAnime-content">
          {this.props.anime.map(item => {
            return <AnimeCard anime={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}
export default PopularAnime;
