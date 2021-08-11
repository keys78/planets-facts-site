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
                    <div className="w-9/12 max-w-3xl image-display mx-auto">
                        <img src={overview && '.' + `${state.planets.images.overview}`} />
                        <img src={structure && '.' + `${state.planets.images.structure}`} />
                        {/* <div className="geo-holder"> */}
                            <div className="overview-adjust">{geology && <img src={'.' + `${state.planets.images.overview}`} />}</div>
                            <div className="geo-cont">{geology && <img className="geo-adjust" src={'.' + `${state.planets.images.geology}`} />}</div>
                        {/* </div> */}
                    </div>
                </div>

                <div className="details">
                    <div className="w-7/12 mx-auto">

                        <h1>{state.planets.name}</h1>
                        <div className="info-display">
                            <p>{overview && state.planets.overview.content}</p>
                            <p>{structure && state.planets.structure.content}</p>
                            <p>{geology && state.planets.geology.content}</p>
                        </div>

                        <div className="mt-0 mb-6 wiki-links">
                            {overview && <div> <p>Source: <a href={state.planets.overview.source}>Wikipedia</a></p><img src="/icons/icon-source.svg"/> </div>}
                            {structure && <div> <p>Source: <a href={state.planets.structure.source}>Wikipedia</a></p><img src="/icons/icon-source.svg"/> </div>}
                            {geology && <div> <p>Source: <a href={state.planets.geology.source}>Wikipedia</a></p><img src="/icons/icon-source.svg"/> </div>}
                        </div>

                        <button onClick={overview_check}> <span>01</span> OVERVIEW</button><br></br>
                        <button onClick={structure_check}><span>02</span> STRUCTURE</button> <br></br>
                        <button onClick={geology_check}><span>03</span> GEOLOGY</button>
                    </div>
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
