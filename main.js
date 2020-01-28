require("dotenv").config();
const winston = require("winston")
const { Client } = require("discord.js")

// Handle logs
let logger = winston.createLogger({
	level: 'info',
	format: winston.format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'bot.log' })
	]
});

// Initialize Discord Bot
const bot = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

bot.once('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`)
	logger.log('info', `Logged in as ${bot.user.tag}!`)
})

// Commands
bot.on('message', msg => {
	if (msg.content.charAt(0) === '!') {
		// NOTE This is where bot commands are parsed.
		switch(msg.content.slice(1, msg.content.length)) {
			case "hello":
				msg.reply("Why hello there!")
				logger.log('info', msg)
				break
		}
	}
	// The bot has a 1/20 chance of reacting to AG with eggplant emoji
	if (msg.author.tag === "JedJackalope#0459" && Math.floor(Math.random()*20) + 1 === 20) {
		msg.react("🍆")
	}
})

// Reactions

// bot.on('rulesAgreementReaction', (reaction, channel) => {
// 	if(reaction.emoji.name === "👍" && channel.id  === "671708456344092683") {
// 		channel.send("agreed")
// 	}
// })

bot.on('rulesAgreementReaction', (reaction, message) => {
	if(reaction.emoji.name === "👍" && message.id === "671718805080113153") {
		console.log("success");
		reaction.channel.send("agreed")
	}
})


bot.login(process.env.TOKEN)