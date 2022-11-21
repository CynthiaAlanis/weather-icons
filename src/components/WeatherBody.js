import React from'react'

const WeatherBody = ({conditions,time}) => {
  return (
    <div>
    <p><span>conditions: </span> {conditions}</p>
      <p><span>time:</span>{time}</p>
    </div>
  );
};

export default WeatherBody