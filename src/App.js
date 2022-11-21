import React from "react"
import WeatherForecast from './components/WeatherForecast'
import WeatherData from './WeatherData'
import "./styles.css";

const weather = WeatherData.map((ele,index)=>{
  return <WeatherForecast {...ele} key={index} />
})


export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>
        {weather}
      </section>
    </div>
  );
}
