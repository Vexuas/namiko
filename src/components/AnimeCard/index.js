import React, { Component } from "react";
import "./index.css";
import BottomCardTitle from "../BottomCardTitle";

class AnimeCard extends Component {
  render() {
    const anime = this.props.anime;

    return (
      <article className="animeCard">
        <img src={anime.img_src} alt="anime pic" className="animeCardImg" />
        <BottomCardTitle title={anime.title} />
      </article>
    );
  }
}
export default AnimeCard;
