import React from 'react';

const WeatherImage = (props) => {
  return (
    <img
      src={props.image}
      className="class-image"
      alt="..."
    />
  );
};

export default WeatherImage;