const Discord = require('discord.js')
const fetch = require("node-fetch")

module.exports.run = async (Bot, message, args) => {
	message.delete()
	if (message.channel.type == "dm") return message.author.send(":x: **You can only use this command on a server!**");
	const msg = await message.channel.send("Loading **dogs**... 🔍")

	fetch(`https://dog.ceo/api/breeds/image/random`)
	.then(res => res.json()).then(body => {

	if(!{body}) return message.channel.send("Something went wrong! Try again!")

		const embed = new Discord.MessageEmbed(" ")
		.setColor('#5378c8')
		.setAuthor("Dogs for you!", message.author.avatarURL())
		.setImage(body.message)
		.setTimestamp()
        .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());

		message.channel.send(embed)

		msg.delete();
		})
	}
module.exports.config = {
	name: "dog",
    aliases: ["doggo"  ,  "woof"],
    usage: "=d",
    description: "Shows photos of dogs",
    accessableby: "Members",
    category: "images"
}