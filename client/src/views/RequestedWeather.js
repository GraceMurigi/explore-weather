import React, { Component} from 'react';
import axios from 'axios';

import {MdLocationOn} from "react-icons/md";

import WeatherTemperature from '../components/WeatherTemperature'; 
import WeatherTitle from '../components/WeatherTitle'; 

import './RequestedWeather.css'; 


class Requested extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            error: null,
            isLoaded:false,
            icon:null,
            location: null,
            title:null,
            temp: null     
        }
    }

    // connecting to the node/express server
    componentDidMount() {
        axios.get('/search-day-weather')
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
                            <MdLocationOn size={32}/> 
                            <h2>{this.state.location}</h2>
                        </div>
                        <WeatherTemperature temp={this.state.temp} /> 
                        <WeatherTitle title={this.state.title} /> 


                    </div>

                </>

            ); 
        }

    }

} 
         

export default Requested;


                