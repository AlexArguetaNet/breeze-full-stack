import "./Dashboard.css"
import { useState } from "react"

function Dashboard({ forecast }) {

    return (
        <div id="dashboard">
            <h1>{forecast.name}</h1>
            <h1>{forecast.temp}</h1>
        </div>
    )
}

export default Dashboard