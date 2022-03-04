var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// GET Method
app.get('/', (req, res) => {
  res.send();
});

// POST Method
app.post('/', (req, res) => {
  res.send();
});

// UPDATE Method
/*app.update('/', (req, res) => {
  res.send();
});

// DELETE Method
app.delete('/', (req, res) => {
  res.send();
});*/

/* Reading JSON File */
/*'use strict';

const fs = require('fs');
const res = require('express/lib/response');

fs.readFile('favs.json', (err, data) => {
    if (err) throw err;
    let favs = JSON.parse(data);
    //console.log(favs);
});

/* readFile() function reads file data in an asynchronous manner */
//console.log('This is after the read call');

/* Writing JSON File */
/*'use strict';

/* already declared in readFile() function */
//const fs = require('fs');
/*
let favs = {
	"created_at": "Wed Mar 13 23:01:36 +0000 2013",
	"id": 311975360667459585,
	"id_str": "311975360667459585",
	"text": "Was wondering why @billgates cc'd me on story abt @MSFTResearch cool viral search tool; discovered I'm featured in it http:\/\/t.co\/g6oSeEIEUr",
	"source": "\u003ca href=\"http:\/\/www.tweetdeck.com\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e",
	"truncated": false,
	"in_reply_to_status_id": null,
	"in_reply_to_status_id_str": null,
	"in_reply_to_user_id": null,
	"in_reply_to_user_id_str": null,
	"in_reply_to_screen_name": null,
	"user": {
		"id": 2384071,
		"id_str": "2384071",
		"name": "Tim O'Reilly",
		"screen_name": "timoreilly",
		"location": "Sebastopol, CA",
		"description": "Founder and CEO, O'Reilly Media. Watching the alpha geeks, sharing their stories, helping the future unfold.",
		"url": "http:\/\/radar.oreilly.com",
		"entities": {
			"url": {
				"urls": [{
					"url": "http:\/\/radar.oreilly.com",
					"expanded_url": null,
					"indices": [0, 24]
				}]
			},
			"description": {
				"urls": []
			}
		},
		"protected": false,
		"followers_count": 1679016,
		"friends_count": 1012,
		"listed_count": 24464,
		"created_at": "Tue Mar 27 01:14:05 +0000 2007",
		"favourites_count": 98,
		"utc_offset": -28800,
		"time_zone": "Pacific Time (US & Canada)",
		"geo_enabled": true,
		"verified": true,
		"statuses_count": 24435,
		"lang": "en",
		"contributors_enabled": false,
		"is_translator": false,
		"profile_background_color": "9AE4E8",
		"profile_background_image_url": "http:\/\/a0.twimg.com\/profile_background_images\/3587880\/notes.gif",
		"profile_background_image_url_https": "https:\/\/si0.twimg.com\/profile_background_images\/3587880\/notes.gif",
		"profile_background_tile": false,
		"profile_image_url": "http:\/\/a0.twimg.com\/profile_images\/2823681988\/f4f6f2bed8ab4d5a48dea4b9ea85d5f1_normal.jpeg",
		"profile_image_url_https": "https:\/\/si0.twimg.com\/profile_images\/2823681988\/f4f6f2bed8ab4d5a48dea4b9ea85d5f1_normal.jpeg",
		"profile_link_color": "0000FF",
		"profile_sidebar_border_color": "87BC44",
		"profile_sidebar_fill_color": "E0FF92",
		"profile_text_color": "000000",
		"profile_use_background_image": true,
		"default_profile": false,
		"default_profile_image": false,
		"following": null,
		"follow_request_sent": false,
		"notifications": null
	},
	"geo": null,
	"coordinates": null,
	"place": null,
	"contributors": null,
	"retweet_count": 19,
	"entities": {
		"hashtags": [],
		"urls": [{
			"url": "http:\/\/t.co\/g6oSeEIEUr",
			"expanded_url": "http:\/\/bit.ly\/13TNLbS",
			"display_url": "bit.ly\/13TNLbS",
			"indices": [118, 140]
		}],
		"user_mentions": [{
			"screen_name": "BillGates",
			"name": "Bill Gates",
			"id": 50393960,
			"id_str": "50393960",
			"indices": [18, 28]
		}, {
			"screen_name": "MSFTResearch",
			"name": "Microsoft Research",
			"id": 21457289,
			"id_str": "21457289",
			"indices": [50, 63]
		}]
	},
	"favorited": true,
	"retweeted": false,
	"possibly_sensitive": false,
	"lang": "en"
};
 
let data = JSON.stringify(favs, null, 2);

fs.writeFile('favs-2.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

/* writeFile() function writes file data in an asynchronous manner */
//console.log('This is after the write call');

module.exports = app;
