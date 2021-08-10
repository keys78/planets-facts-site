import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ViewUserDetails = _ => {
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
        <div className="holder">
            <div>
                <img src={state.planets.images.overview} alt={state.planets.name} />
                {/* <img src='/images/planet-mercury.svg' alt="arch-studio logo" /> */}
            </div>
            

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
    );
};

export default ViewUserDetails;
