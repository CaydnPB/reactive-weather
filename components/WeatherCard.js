import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/partlyCloudy.svg"
import cloudy from "../assets/Cloudy.svg"

function WeatherCard(props) {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src={(() => {
  switch (props.data.forecast) {
    case 'Sunny':
      return sunny;
    case 'Rainy':
      return rainy;
    case 'Partly cloudy':
      return partlyCloudy;
    case 'Cloudy':
      return cloudy;
    default:
      return partlyCloudy;
  }})()} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.data.city}</h3>
            <h5 className="card-text">{props.data.temperature}</h5>
            <h5 className="card-text">{props.data.forecast}</h5>
        </div>
    </div>
  );
};

module.exports = WeatherCard;