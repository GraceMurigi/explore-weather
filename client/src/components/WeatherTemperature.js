import React from 'react';
import { WiThermometer } from "react-icons/wi";


const WeatherTemperature = (props) => {
    return (
        <h3> <WiThermometer size={32}/> <span>{props.temp} &deg;C </span> </h3>
    );
}

export default WeatherTemperature;