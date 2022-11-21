import React from 'react'
import WeatherBody from './WeatherBody'
import WeatherImage from './WeatherImage'
//create the component
const Weather = (props) => {
return (
  <div className="weather">
  <WeatherImage image={props.image} />
  <WeatherBody 
  conditions={props.conditions}
  time={props.time}
  />
</div>
  );
};

export default Weather
