const Discord = require("discord.js");
const config = require("../../botconfig.json");

module.exports.run = async (client, message, args) => {
    message.delete()
    const clientUser = message.mentions.users.first() || message.author;

    if (message.channel.type == "dm") return message.author.send(":x: **You can only use this command on a server!**");

    const embed = new Discord.MessageEmbed(" ")
        .setColor("#5378c8")
        .setImage(clientUser.avatarURL({ dynamic: true, format: 'png', size: 512 }))
        .setTimestamp()
        .setFooter(`Responding to ${message.author.username}`, message.author.avatarURL());

        message.channel.send(embed);
    }
module.exports.config = {
    name: "avatar",
    description: "Sends a user or a mentioned user's avatar!",
    usage: "=avatar | =avatar <@mention>",
    accessableby: "Members",
    aliases: ["icon"],
    category: "images"
}