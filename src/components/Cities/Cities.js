import React, { useState } from "react";
import "./Cities.scss";

const cities = [
  {
    id: "0",
    label: "New York City",
    lat: "40.71427",
    lon: "-74.00597",
  },
  {
    id: "1",
    label: "Miami",
    lat: "25.8101566",
    lon: "-80.1990681",
  },
  {
    id: "2",
    label: "Chicago",
    lat: "41.85003",
    lon: "-87.65005",
  },
  {
    id: "3",
    label: "Las Vegas",
    lat: "36.11497965",
    lon: "-115.20308573",
  },
  {
    id: "4",
    label: "Los Angles",
    lat: "34.05223",
    lon: "-118.24368",
  },
];

const Cities = ({ setCity }) => {
  const [activeCity, setActiveCity] = useState("All");

  const handleClick = (city) => {
    if (typeof city === "string") {
      // "all"
      setActiveCity(city); //for css styles via getisActive()
      setCity({}); //for query param in Artist.js
      return;
    } else {
      setActiveCity(city.label);
      setCity(city);
    }
  };

  const getIsActive = (label) => {
    const isActiveCity = activeCity === label;

    if (isActiveCity) {
      return "city-button active-city";
    }

    return "city-button";
  };

  const allClassName = getIsActive("All");
  return (
    <div className="citiesWrapper">
      <button className={allClassName} onClick={() => handleClick("All")}>
        All
      </button>

      {cities.map((city) => {
        const className = getIsActive(city.label);
        return (
          <button
            key={city.id}
            className={className}
            onClick={() => handleClick(city)}
          >
            {city.label}
          </button>
        );
      })}
    </div>
  );
};

export default Cities;
