import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import CurrentWeather from './CurrentWeather'; 
import RequestedWeather from './RequestedWeather'; 
import Request from './Request';

import './Home.css';


const Home = (props) => {
    return (
    	<>
    		<Router>

		    			
		    			<div className="header">
		    				<nav>
		    					<ul>
			    					<li><Link to="/day">Select Day To See Weather</Link></li>

			    				</ul>	
		    				</nav>
		    			</div>
		    			<div className="displayweather">
							<Route exact path='/' component={CurrentWeather}/> 
							<Route exact path='/Day' component={Request}/>
							<Route  exact path='/request' component={RequestedWeather}/>
						</div>
  			</Router>



    	</>
    );
}

export default Home;