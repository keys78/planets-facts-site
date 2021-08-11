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
        console.log('overview')
    }

    const structure_check = () => {

        setOverview(false)
        setStructure(true)
        setGeology(false)
        console.log('sters')
    }
    const geology_check = () => {

        setOverview(false)
        setStructure(false)
        setGeology(true)
        console.log('geology')
    }

    return (
        <section className="holder relative">
            <img className="stars" src="/icons/background-stars.svg" />

            <div className="toggle-2 sm:hidden block">
                <button onClick={overview_check}> OVERVIEW </button>
                <button onClick={structure_check}>  STRUCTURE </button> 
                <button onClick={geology_check}> SURFACE </button>
            </div>

            <div className="w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 lg:pt-16 pt-10">
                <div>
                    <div className="w-9/12 max-w-3xl image-display mx-auto">
                        <img src={overview && '.' + `${state.planets.images.overview}`} />
                        <img src={structure && '.' + `${state.planets.images.structure}`} />

                        <div className="overview-adjust">{geology && <img src={'.' + `${state.planets.images.overview}`} />}</div>
                        <div className="geo-cont">{geology && <img className="geo-adjust" src={'.' + `${state.planets.images.geology}`} />}</div>
                    </div>
                </div>


                <div className="lg:w-7/12 w-11/12 flex lg:flex-col gap-5 flex-row lg:justify-center justify-between mx-auto details">

                    <div className="lg:w-full sm:w-6/12 w-full">
                        <h1>{state.planets.name}</h1>
                        <div className="info-display">
                            <p>{overview && state.planets.overview.content}</p>
                            <p>{structure && state.planets.structure.content}</p>
                            <p>{geology && state.planets.geology.content}</p>
                        </div>

                        <div className="mb-6 wiki-links">
                            {overview && <div> <p>Source: <a href={state.planets.overview.source}>Wikipedia</a></p><img src="/icons/icon-source.svg" /> </div>}
                            {structure && <div> <p>Source: <a href={state.planets.structure.source}>Wikipedia</a></p><img src="/icons/icon-source.svg" /> </div>}
                            {geology && <div> <p>Source: <a href={state.planets.geology.source}>Wikipedia</a></p><img src="/icons/icon-source.svg" /> </div>}
                        </div>
                    </div>

                    <div className="toggle lg:w-full w-6/12 lg:mt-0 mt-12 sm:block hidden">
                        <button onClick={overview_check}> <span>01</span> OVERVIEW </button><br></br>
                        <button onClick={structure_check}> <span>02</span> INTERNAL STRUCTURE </button> <br></br>
                        <button onClick={geology_check}> <span>03</span> SURFACE GEOLOGY </button>
                    </div>
                </div>


            </div>

            <div className="w-10/12 mx-auto mt-8 more-details flex md:flex-row flex-col gap-4">
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
            <h6 class="absolute bottom-0 right-4  signature text-grey-400 text-lg font-medium text-right">| Coded by <a class="text-green-600" href="https://github.com/Em-codes/planets-facts-site">Em_codes</a></h6>
        </section>
    );
};

export default ViewPlanetDetails;
