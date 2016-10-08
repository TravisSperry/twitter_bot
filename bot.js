
/* Configure the Twitter API */
var TWITTER_CONSUMER_KEY = '';
var TWITTER_CONSUMER_SECRET = '';
var TWITTER_ACCESS_TOKEN = '';
var TWITTER_ACCESS_TOKEN_SECRET = '';

var Twit = require('twit');

var Bot = new Twit({
	consumer_key: TWITTER_CONSUMER_KEY,
	consumer_secret: TWITTER_CONSUMER_SECRET,
	access_token: TWITTER_ACCESS_TOKEN,
	access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});

console.log('The bot is running...');

/* BotInit() : To initiate the bot */
function BotInit() {
	var stream = Bot.stream('statuses/filter', { track: '#paircolumbus', language: 'en' })

	stream.on('tweet', function (tweet) {
	  console.log(tweet["user"]["name"] + " said, " + tweet["text"] )
	})
}


/* Initiate the Bot */
BotInit();
