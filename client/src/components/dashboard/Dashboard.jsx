import { useState } from "react";

function Dashboard({ forecast }) {

    return (
        <div>
            <h1>{forecast.name}</h1>
            <h1>{forecast.temp}</h1>
        </div>
    )
}

export default Dashboard