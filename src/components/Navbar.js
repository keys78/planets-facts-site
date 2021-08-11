import React from "react";
import { Link } from "react-router-dom";
// import { planetData } from "../data";
import planets from "../data/data.json"
import { useState } from "react";

const Home = () => {
  const [showBar, setShowBar] = useState(null)

  const openNav = () => {
    !showBar ? setShowBar(true) : setShowBar(false)

  }

  const closeNav = () => {
    setShowBar(false)

  }

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
                  <img src={planet.images.overview} />
                </Link>
              </div>
            );
          })}
        </div>

        <div onClick={openNav} className="hambuger sm:hidden block">
          {!showBar && <Link to="/"><img src="/Icons/icon-hamburger.svg" alt="bars" /></Link>}
          {showBar && <img src="/Icons/icon-close.svg" alt="close" />}
        </div>
      </div>

      {showBar &&
        <div className="sidebar sm:hidden block">
          <div>
            {planets.map((planet) => {
              return (
                <div key={planet.id}>
                  <Link
                    onClick={closeNav}
                    to={{
                      pathname: `/planets/${planet.name}`,
                      state: { planets: planet }
                    }}
                  >
                    <div>
                      <img className="w-5" src={`${planet.images.structure}`} />
                      <h1 className="text-lg">{planet.name}</h1>
                    </div>

                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      }

    </header>
  );
};

export default Home;