const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")

module.exports.run = async (bot, message, args) => {
    message.delete()
    let uEmbed = new Discord.MessageEmbed()
        .setColor("#5378c8")
        .setTitle(`User Info`)
        .setDescription(`**This Displays Info About ${message.author.name}**`)
        .setThumbnail(message.guild.iconURL())
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .addField(`**Username:**`, `${message.author.username}`, true)
        .addField(`**Discriminator:**`, `${message.author.discriminator}`, true)
        .addField(`**ID:**`, `${message.author.id}`, true)
        .addField(`**Status:**`, `${message.author.presence.status}`, true)
        .addField(`**Created At:**`, `${message.author.createdAt}`, true)
        .setFooter(`${bot.user.username} | User Info`, `${bot.user.displayAvatarURL()}`)
    message.channel.send(uEmbed)
}

module.exports.config = {
    name: "userinfo",
    aliases: ["ui"  ,  "userdesc"],
    usage: "=userinfo",
    description: "Shows infromation on users",
    accessableby: "Members",
    category: "information"
}