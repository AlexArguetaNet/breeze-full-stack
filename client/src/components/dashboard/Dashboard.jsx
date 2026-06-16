import "./Dashboard.css"
import { useState } from "react"
import Card from "../card/Card";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";

function Dashboard({ forecast }) {

    return (
        <div id="dashboard">
            <h1>{forecast.name}</h1>
            <h1>{forecast.temp} &deg;</h1>
            <h2>{forecast.main}</h2>
            <div className="cards">
                <Card icon={<FiSunrise />} data={forecast.sunrise} />
                <Card icon={<FiSunset />} data={forecast.sunset} />
                {/* TODO: Add wind card */}
            </div>
        </div>
    )
}

export default Dashboard