import React, { Component } from "react";
import SeasonalCard from "../SeasonalCard";
import "./index.css";

class SeasonalAnime extends Component {
  render() {
    return (
      <div className="seasonalAnime">
        <div className="seasonalAnime-content">
          {this.props.seasons.map(item => {
            return <SeasonalCard season={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}
export default SeasonalAnime;
