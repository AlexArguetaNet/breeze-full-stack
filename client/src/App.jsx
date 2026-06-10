import { useEffect, useState } from "react";
import { getForecast } from "./services/weather";

function App() {

  // Runs function to call API on first render
  useEffect(() => {

    async function runGetForecast() {
      const data = await getForecast("charlotte,us");
      console.log(data);
    }

    runGetForecast();

  }, []);

  return (
    <>
      
    </>
  )
}

export default App
