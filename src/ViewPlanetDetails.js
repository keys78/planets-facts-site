import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// import mercury from './images/planet-mercury'

const ViewPlanetDetails = _ => {
    const { state } = useLocation();

    const [overview, setOverview] = useState(true)
    const [structure, setStructure] = useState(false)
    const [geology, setGeology] = useState(false)


    const overview_check = () => {

        setOverview(true)
        setStructure(false)
        setGeology(false)
    }

    const structure_check = () => {

        setOverview(false)
        setStructure(true)
        setGeology(false)
    }
    const geology_check = () => {

        setOverview(false)
        setStructure(false)
        setGeology(true)
    }

    return (
        <section className="holder">
            <div className="w-11/12 mx-auto grid grid-cols-2 pt-16">
                <div>
                    <div className="w-9/12 image-display mx-auto">
                        <img src={overview && '.' + `${state.planets.images.overview}`} />
                        <img src={structure && '.' + `${state.planets.images.structure}`} />
                        <div>
                            {geology && <img src={'.' + `${state.planets.images.overview}`} />}
                            {geology && <img src={'.' + `${state.planets.images.geology}`} />}
                        </div>
                    </div>
                </div>

                <div className="details">
                    <div className="border border-black p-5">
                        <h1>{state.planets.name}</h1>
                        <h1>{overview && state.planets.overview.content}</h1>
                        <h1>{structure && state.planets.structure.content}</h1>
                        <h1>{geology && state.planets.geology.content}</h1>
                    </div>

                    <button onClick={overview_check}>OVERVIEW</button>
                    <button onClick={structure_check}>STRUCTURE</button>
                    <button onClick={geology_check}>GEOLOGY</button>

                </div>
            </div>
            <div className="w-10/12 mx-auto mt-8 more-details flex gap-8">
                <div>
                    <h2>ROTATION TIME</h2>
                    <h1>{state.planets.rotation}</h1>
                </div>
                <div>
                    <h2>REVOLUTION TIME</h2>
                    <h1>{state.planets.revolution}</h1>
                </div>
                <div>
                    <h2>RADIUS</h2>
                    <h1>{state.planets.radius}</h1>
                </div>
                <div>
                    <h2>AVERAGE TEMP.</h2>
                    <h1>{state.planets.temperature}</h1>
                </div>
            </div>
        </section>
    );
};

export default ViewPlanetDetails;
