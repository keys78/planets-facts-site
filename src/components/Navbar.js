import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from '/data.js';

const Home = () => {
  const [planets, setPlanets] = useState(null)

  useEffect(() => {
    // fetch('/data.js')
    //   .then(res => res.json())
    //   .then(data => setPlanets(data))

    console.log(data)

  }, []);



  return (

    <header>
    <div className="flex pt-4 justify-between items-center w-11/12 mx-auto">
      <div>
        <h1 className="text-3xl">THE PLANETS</h1>
      </div>
      <div className="flex justify-between gap-4 items-center">
        {planets && planets.map(planet => {
          return (
            <div key={planet.name}>
              <Link
                to={{
                  pathname: `/planets/${planet.name}`,
                  state: { planets: planet }
                }}
              >
                <h1 className="text-base">{planet.name}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    </header>
  );
};

export default Home;