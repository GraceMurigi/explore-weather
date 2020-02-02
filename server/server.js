const express = require('express');
const app = express();

const currentWeatherRouter = require('./routes/currentWeather');
const setDayRouter = require('./routes/setDay');

const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(currentWeatherRouter);
app.use(setDayRouter); 


app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log('Listening on port ' + port);
})
