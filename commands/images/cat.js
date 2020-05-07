const Discord = require('discord.js')
const fetch = require("node-fetch")

module.exports.run = async (bot, message, args) => {
	message.delete()
	if (message.channel.type == "dm") return message.author.send(":x: **You can only use this command on a server!**");
	const msg = await message.channel.send("Searching for **cats**... 🔍")

	fetch(`http://aws.random.cat/meow`)
	.then(res => res.json()).then(body => {

	if(!{body}) return message.channel.send("Something went wrong! Try again!")

		const embed = new Discord.MessageEmbed(" ")
		.setColor('#5378c8')
		.setAuthor("Cats for you!", message.author.avatarURL())
		.setImage(body.file)
		.setTimestamp()
        .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());

		message.channel.send(embed)

		msg.delete();
		})
}
module.exports.config = {
    name: "cat",
    aliases: ["meow"],
    usage: "=cat",
    description: "Shows photos of cats",
    accessableby: "Members",
    category: "images"
}