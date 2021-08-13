import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { planetData } from "../data";
import planets from "../data/data.json"
import { useState } from "react";
import { motion } from "framer-motion";

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
                <NavLink
                  className={
                planet.name === 'Mercury' && 'herma'}
                  to={{
                    pathname: `/planets/${planet.name}`,
                    state: { planets: planet }
                  }}
                >
                  <motion.h1
                    whileHover={{ scale: 1.2 }}
                    transiton={{ type: 'spring', stifness: 300 }}
                    className="text-lg">{planet.name}</motion.h1>
                </NavLink>
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
        <motion.div
          initial={{ x: '100vh' }}
          animate={{ x: 0 }}
          exit={{ x: '100vh' }}
          transition={{ delay: 0.0 }}
          className="sidebar sm:hidden block">
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
                    <div className="side-clicks-holder flex justify-between items-center">
                      <div className="side-clicks">
                        <img className="w-5" src={`${planet.images.structure}`} alt="planets" />
                        <motion.h1
                          whileHover={{ scale: 1.3 }}
                          transiton={{ type: 'spring', stifness: 300 }}
                          className="text-lg">{planet.name}</motion.h1>
                      </div>
                      <img src="/Icons/icon-chevron.svg" alt="chevron" />
                    </div>

                  </Link>
                </div>
              );
            })}
          </div>
        </motion.div>
      }

    </header>
  );
};

export default Home;

// className={
                // planet.name === 'Mercury' && 'herma'
              // planet.name === 'Venus' ? 'hera' : ''
              // planet.name === 'Mercury' ? console.log('yes') : console.log('no')
            // }