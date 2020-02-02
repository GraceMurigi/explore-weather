import React, { Component} from 'react';
import axios from 'axios';

import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";


import './WeeklyWeather.css'; 



class Weather extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            isLoaded:false,
            summary:null,
            day1:null,
            day2:null, 
            day3:null, 
            day4:null, 
            day5:null, 
            day6:null, 
            day7:null, 
            day1tempHigh: null, 
            day1tempLow:null, 
            day2tempHigh: null, 
            day2tempLow:null,  
            day3tempHigh: null, 
            day3tempLow:null, 
            day4tempHigh: null, 
            day4tempLow:null, 
            day5tempHigh: null, 
            day5tempLow:null, 
            day6tempHigh: null, 
            day6tempLow:null, 
            day7tempHigh: null, 
            day7tempLow:null, 
            day1summary:null,
            day2summary:null, 
            day3summary:null,
            day4summary:null,
            day5summary:null,
            day6summary:null,
            day7summary:null,

        }
    }

    // connecting to the node/express server
    componentDidMount() {
            axios.get('/current-weather')
            .then(response => {
                this.setState({
                    isLoaded: true, 
                    summary: response.data.daily.summary,
                    day1:new Date(response.data.daily.data[1].time*1000).toString(),
                    day1summary: response.data.daily.data[1].summary,
                    day1tempHigh:response.data.daily.data[1].temperatureHigh,
                    day1tempLow: response.data.daily.data[1].temperatureLow,
                    day2:new Date(response.data.daily.data[2].time*1000).toString(),
                    day2summary: response.data.daily.data[2].summary,
                    day2tempHigh:response.data.daily.data[2].temperatureHigh,
                    day2tempLow: response.data.daily.data[2].temperatureLow,
                    day3:new Date(response.data.daily.data[3].time*1000).toString(),
                    day3summary: response.data.daily.data[3].summary,
                    day3tempHigh:response.data.daily.data[3].temperatureHigh,
                    day3tempLow: response.data.daily.data[3].temperatureLow,
                    day4:new Date(response.data.daily.data[4].time*1000).toString(),
                    day4summary: response.data.daily.data[4].summary,
                    day4tempHigh:response.data.daily.data[4].temperatureHigh,
                    day4tempLow: response.data.daily.data[4].temperatureLow,
                    day5:new Date(response.data.daily.data[5].time*1000).toString(),
                    day5summary: response.data.daily.data[5].summary,
                    day5tempHigh:response.data.daily.data[5].temperatureHigh,
                    day5tempLow: response.data.daily.data[5].temperatureLow,
                    day6:new Date(response.data.daily.data[6].time*1000).toString(),
                    day6summary: response.data.daily.data[6].summary,
                    day6tempHigh:response.data.daily.data[6].temperatureHigh,
                    day6tempLow: response.data.daily.data[6].temperatureLow,
                    day7:new Date(response.data.daily.data[7].time*1000).toString(),
                    day7summary: response.data.daily.data[7].summary,
                    day7tempHigh:response.data.daily.data[7].temperatureHigh,
                    day7tempLow: response.data.daily.data[7].temperatureLow,

                    
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
                                
                    <div className="weekly-cards">
                        <div className="card">
                            <p>{this.state.day1}</p>
                            <hr/>
                            <div>{this.state.day1summary}</div>
                            <div>
                                <p>High <FaTemperatureHigh/>{this.state.day1tempHigh}</p>
                                <p>Low <FaTemperatureLow/>{this.state.day1tempLow}</p>
                            </div>
                        </div>
                        <div className="card">
                            <p>{this.state.day2}</p>
                            <hr/>
                            <div>{this.state.day2summary}</div>
                            <div>
                                <p>High <FaTemperatureHigh/>{this.state.day2tempHigh}</p>
                                <p>Low <FaTemperatureLow/>{this.state.day2tempLow}</p>
                            </div>
                        </div>
                        <div className="card">
                            <p>{this.state.day3}</p>
                            <hr/>
                            <div>{this.state.day3summary}</div>
                            <div>
                                <p>High <FaTemperatureHigh/>{this.state.day3tempHigh}</p>
                                <p>Low <FaTemperatureLow/>{this.state.day3tempLow}</p>
                            </div>
                        </div>
                        <div className="card">
                            <p>{this.state.day4}</p>
                            <hr/>
                            <div>{this.state.day4summary}</div>
                            <div>
                                <p>High <FaTemperatureHigh/>{this.state.day4tempHigh}</p>
                                <p>Low <FaTemperatureLow/>{this.state.day4tempLow}</p>
                            </div>
                        </div>
                        <div className="card">
                            <p>{this.state.day5}</p>
                            <hr/>
                            <div>{this.state.day5summary}</div>
                            <div>
                                <p>High <FaTemperatureHigh/>{this.state.day5tempHigh}</p>
                                <p>Low <FaTemperatureLow/>{this.state.day5tempLow}</p>
                            </div>
                        </div>
                        <div className="card">
                            <p>{this.state.day6}</p>
                            <hr/>
                            <div>{this.state.day6summary}</div>
                            <div>
                                <p>High <FaTemperatureHigh/>{this.state.day6tempHigh}</p>
                                <p>Low <FaTemperatureLow/>{this.state.day6tempLow}</p>
                            </div>
                        </div>
                        <div className="card">
                            <p>{this.state.day7}</p>
                            <hr/>
                            <div>{this.state.day7summary}</div>
                            <div>
                                <p>High <FaTemperatureHigh/>{this.state.day7tempHigh}</p>
                                <p>Low <FaTemperatureLow/>{this.state.day7tempLow}</p>
                            </div>
                        </div>
                    </div>
                </>

            ); 
        }

    }

} 

export default Weather;


                