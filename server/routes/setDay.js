const express = require('express')
const fetch = require('node-fetch');

const api_key = 'a3f2ebd22039323bed406731597933b9'; 
const lat = -1.28333, lon = 36.81667; 
const units = '?units=si'
const api = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}`;
let date; 

const router = express.Router()


router.post('/set-day', (req, res) => {
	date = Math.round(new Date(req.body.date).getTime()/1000)

	if(!date){
		res.sendStatus(400)
	} else {
		console.log(date)
		res.redirect('/request')
	}

})


router.get('/search-day-weather', async(req, res) => {
	// build url with user selected date
	try{
		let base_url = api;

		const userTime = (x, y, z) => {
			let new_url = x + "," + y + z; 
			return new_url; 
		}; 
		const api_url = userTime(base_url, date, units); 
		console.log(api_url)
		const data = await fetch(api_url);
		const data_json = await data.json();
		res.json(data_json)

	} catch(error) {
		res.status(400).send(error)
	}


})

module.exports = router


