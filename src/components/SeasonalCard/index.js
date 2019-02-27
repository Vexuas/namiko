import React, { Component } from "react";
import "./index.css";
import TopCardTitle from "../TopCardTitle";

class SeasonalCard extends Component {
  render() {
    const season = this.props.season;
    return (
      <article className="seasonCard">
        <TopCardTitle title={season.title} />
        <img src={season.img_src} alt="season pic" className="seasonCardImg" />
      </article>
    );
  }
}
export default SeasonalCard;
