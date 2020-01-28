const logger = require("./utils/logger")
const Discord = require("discord.js")

// Initialize Discord Bot
const bot = new Discord.Client();
bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', msg => {
	if (msg.content.charAt(0) === '!') {
		// NOTE This is where bot commands are parsed.
		switch(msg.content.slice(1, msg.content.length)) {
			case "hello":
				msg.reply("Why hello there!")
		}
	}
}
)

bot.login(process.env.TOKEN)