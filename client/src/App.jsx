import { useEffect, useState } from "react";
import { getForecast } from "./services/weather";
import Dashboard from "./components/dashboard/Dashboard";

function App() {

  const [forecast, setForecast] = useState();

  // Runs function to call API on first render
  useEffect(() => {

    async function runGetForecast() {
      const data = await getForecast("charlotte,us");
      setForecast(data);
    }

    runGetForecast();

  }, []);

  return (
    <>
      <div id="main">
        { forecast && <Dashboard forecast={forecast} /> }
      </div>
    </>
  )
}

export default App
