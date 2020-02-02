const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');

const api_key = 'a3f2ebd22039323bed406731597933b9'; 
const lat = -1.28333, lon = 36.81667; 
const units = '?units=si'
const api = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}${units}`;

router.get('/current-weather' , async(req, res) => {
	try{
		const api_url = api; 
		console.log(api_url); 
		const data = await fetch(api_url); 
		const data_json = await data.json(); 
		res.json(data_json)

	}catch(error) {
		res.status(400).send(error)
	}
	

})


module.exports = router
