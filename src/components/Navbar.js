import React from "react";
import { Link } from "react-router-dom";
// import { planetData } from "../data";
import planets from "../data/data.json"

const Home = () => {

  return (

    <header>
    <div className="flex pt-4 lg:px-8 px-2 lg:flex-row sm:flex-col justify-between items-center">
      <div className="logo">
        <h1 className="text-3xl antonio">THE PLANETS</h1>
      </div>
      <div className="sm:flex hidden planet-list flex justify-between gap-6 items-center">
        {planets.map((planet) => {
          return (
            <div key={planet.id}>
              <Link
                to={{
                  pathname: `/planets/${planet.name}`,
                  state: { planets: planet }
                }}
              >
                <h1 className="text-lg">{planet.name}</h1>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="hambuger sm:hidden block">
        <img src="/Icons/icon-hamburger.svg" alt="bars" />
      </div>
    </div>
    </header>
  );
};

export default Home;