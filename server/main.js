const logger = require("./utils/logger")
var Discord = require('discord.io');


// Initialize Discord Bot
var bot = new Discord.Client({
	token: process.env.TOKEN,
	autorun: true
});

// FIXME not sure why methods isn't being loaded
// bot.on('ready', function (evt) {
// 	logger.info('Connected');
// 	logger.info('Logged in as: ');
// 	logger.info(bot.username + ' - (' + bot.id + ')');
// });

bot.on('message', function (user, userID, channelID, message, evt) {
	// It will listen for messages that will start with `!`
	if (message.substring(0, 1) == '!') {
		var args = message.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1);

		// NOTE this is where commands are defined
		switch(cmd) {
			case 'hello':
			bot.sendMessage({
				to: channelID,
				message: 'Greetings, kinkster!'
			});
			break;
		}
	}
});