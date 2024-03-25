import CurrentWeather from "./components/CurrentWeather";
import { useEffect, useState } from "react";
import axios from "axios";
import getProcessedWeatherData from "./utility/getProcessedWeatherData";

const App = () => {
  const [weatherData, setWeatherData] = useState({})
  
  useEffect(() => {
    axios.get("http://localhost:5000/weather?lat=51.5074&lon=0.1278").then((response: any) => {
      setWeatherData(response.data)
      getProcessedWeatherData(response.data)
    })
  },[]);


  return (
    <div className="bg-hero-pattern bg-cover bg-center h-96 px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="bg-slate-300 col-span-2">
          <CurrentWeather weather={weatherData}/>
        </div>
        <div className="bg-red-500">01</div>
        <div className="bg-red-500">01</div>
        <div className="bg-red-500">01</div>
        <div className="bg-red-500">01</div>
      </div>
    </div>
  );
}

export default App;
