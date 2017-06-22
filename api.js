#!/usr/bin/env node

//global libs
global.config  = {};
global.fs 		 = require('fs');
global.agent   = require('socks5-https-client/lib/Agent');
global.request = require('request');

//local libs
var	bodyParser 			 = require('body-parser'),
		util 						 = require('util'),
		express 				 = require('express'),
		cors 						 = require('cors'),
		app 						 = express();

//--- app routes
global.pixel  = require('./routes/pixel');

config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS
var corsOptions = {
	origin: '*'
};

app.options('*', cors());

pixel.mark();

app.listen(config.port, function(){
	console.log('#############################');
	console.log('||||||||# PIXEL API LISTENER #||||||||');
	console.log('#############################');
	console.log('----> VERSION ' + config.version);
});
