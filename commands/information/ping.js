const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
    message.delete()
   
    message.channel.send("Pinging...").then(m => {
       
        let ping = m.createdTimestamp - message.createdTimestamp
       
        let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"]
        
        let response = choices[Math.floor(Math.random() * choices.length)]
        
        const pEmbed = new Discord.MessageEmbed()
            .setTitle(`**${bot.user.username }Ping**`)
            .setColor("#5378c8")
            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription(`This shows the ping for the __**${bot.user.username}!**__`)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .addField(`**Ping:**\n`, `${response}:\n**Bot Latency:** \`${ping}\`ms\n**API Latency:** \`${Math.round(bot.ws.ping)}\`ms`)
            .setFooter(`${bot.user.username} |Ping`, `${bot.user.displayAvatarURL()}`)
        m.edit(pEmbed).then(m => m.delete({timeout:15000}))
    })
}
module.exports.config = {
    name: "ping",
    description: "PONG! Displays the api & bot latency",
    usage: "=ping",
    accessableby: "Members",
    aliases: ["latency"],
    category: "information"

}
