'use strict';

var init = function () {

	if(process.env.NODE_ENV === 'production') {
		var redisURI 		= require('url').parse(process.env.REDIS_URL);
		var redisPassword 	= redisURI.auth.split(':')[1];
		return {
			mongodb: process.env.mongodb,
			sessionSecret: process.env.sessionSecret,
			
			redis: {
				host: redisURI.hostname,
				port: redisURI.port,
				password: redisPassword
			}
		}
	}
	else {
		return require('./config.json');
	}
}

module.exports = init();
