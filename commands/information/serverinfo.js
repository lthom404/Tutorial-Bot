const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")

module.exports.run = async (bot,message, args) => {
    message.delete()
    let sEmbed = new Discord.MessageEmbed() 
            .setColor("#5378c8")
            .setTitle(`Server Info`)
            .setDescription(`*This Displays info about ${message.guild.name}*`)
            .setThumbnail(message.guild.iconURL())
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .addField(`**Guild Name:**`, `${message.guild.name}`, true)
            .addField(`**Guild Owner:**`, `${message.guild.owner}`, true)
            .addField(`**Role Count:**`, `${message.guild.roles.cache.size}`, true)
            .addField(`**Member Count:**`, `${message.guild.memberCount}`, true)
            .addField(`**Channel Count:**`, `${message.guild.channels.cache.size}`, true)
            .addField('**Total Real Members**', message.guild.members.cache.filter(member => !member.user.bot).size, true)
            .addField('**Total Bots**', message.guild.members.cache.filter(member => member.user.bot).size, true)
            .addField('**Total Channels**', message.guild.channels.cache.size, true)
            .addField('**Total Text Channels**',message.guild.channels.cache.filter(ch => ch.type === 'text').size, true)
            .addField('**Total Voice Channels**', message.guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
            .setFooter(`${bot.user.username} | Server Info`, `${bot.user.displayAvatarURL()}`)
        message.channel.send(sEmbed)
}

module.exports.config = {
    name: "serverinfo",
    aliases: ["si" , "serverdesc"],
    description: "Shows information on the server",
    accessableby: "Members",
    usage: "=serverinfo",
    category: "information"

}