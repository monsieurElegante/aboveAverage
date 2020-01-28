const logger = require("./utils/logger")
const { Client } = require("discord.js")

// Initialize Discord Bot
const bot = new Client({ partials: ['MESSAGE', 'REACTION'] });

bot.once('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`)
})





bot.on('message', msg => {
	if (msg.content.charAt(0) === '!') {
		// NOTE This is where bot commands are parsed.
		switch(msg.content.slice(1, msg.content.length)) {
			case "hello":
				msg.reply("Why hello there!")
				break
		}
	}
	// Reacts to anything AG says with an eggplant emoji
	if (msg.author.tag === "JedJackalope#0459") {
		msg.react("🍆")
	}
})


bot.login(process.env.TOKEN)