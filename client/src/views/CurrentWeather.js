import React, { Component} from 'react';
import axios from 'axios';

import WeatherTemperature from '../components/WeatherTemperature'; 
import WeatherTitle from '../components/WeatherTitle'; 
import WeeklyWeather from './WeeklyWeather';

import {WiCloudRefresh} from "react-icons/wi";

import './CurrentWeather.css'


class Weather extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            error: null,
            isLoaded:false,
            location: null, 
            icon:null,
            title:null,
            temp: null     
        }
    }

    // connecting to the node/express server
    componentDidMount() {
            axios.get('/current-weather')
            .then(response => {
                this.setState({
                    isLoaded: true, 
                    icon: response.data.currently.icon,
                    location: response.data.timezone,
                    title: response.data.currently.summary, 
                    temp: response.data.currently.temperature

                })
            })
            .catch((error) => {
                console.log(error)
            })


    }



    render() {
        const {error, isLoaded} = this.state; 
        if (error) {
            return <div> Error: {error.message} </div> 
        } else if (!isLoaded) {
            return <div> Loading... </div> 
        } else {
            return (
                <>
                    <div className="current">
                        <div className="location">
                            <WiCloudRefresh size={100}/> 
                            <h2>Now in {this.state.location}</h2>
                        </div>
                        <WeatherTemperature temp={this.state.temp} /> 
                        <WeatherTitle title={this.state.title} /> 


                    </div>
                    <WeeklyWeather />
                </>

            ); 
        }

    }

} 

export default Weather;


                