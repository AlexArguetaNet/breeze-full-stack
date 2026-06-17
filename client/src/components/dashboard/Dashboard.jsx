import "./Dashboard.css"
import { useState } from "react"
import Card from "../card/Card";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { FaWind } from "react-icons/fa";

function Dashboard({ forecast }) {

    return (
        <div id="dashboard">
            <h1>{forecast.name}</h1>
            <h1>{forecast.temp} &deg;</h1>
            <h2>{forecast.main}</h2>
            <div className="cards">
                <Card title={"Sunrise"} icon={<FiSunrise />} data={forecast.sunrise} />
                <Card title={"Sunset"} icon={<FiSunset />} data={forecast.sunset} />
                <Card title={"Wind"} icon={<FaWind />} data={forecast.wind.speed} />
            </div>
        </div>
    )
}

export default Dashboard