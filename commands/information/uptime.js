const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const day = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${day.padStart(1, '0')} days\n${hrs.padStart(2, '0')} hours\n${min.padStart(2, '0')} minutes\n${sec.padStart(2, '0')} seconds\n`
    }
    const uEmbed = new Discord.MessageEmbed()
        .setTitle(`${bot.user.username} Bot Uptime`)
        .setThumbnail(bot.user.displayAvatarURL())
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor('#5378c8')
        .addField(`__**Uptime:**__`, `${duration(bot.uptime)}`)
        .addField('__**Bot Owner:**__' , '<@!596345705740763137>')
        .addField('__**Created At:**__' , `${bot.readyAt}`)
        .addField(`__**Dashboard (Bot Owner Use Only)**__` , "[Link](https://app.pm2.io/)")
        .setFooter(`${bot.user.username} | Uptime`, `${bot.user.displayAvatarURL()}`)
    message.channel.send(uEmbed)
}


module.exports.config = {
    name: "uptime",
    aliases: ["ut"  ,  "up"],
    usage: "=uptime",
    description: "Shows how long the bot has been up for",
    accessableby: "Members",
    category: "information"
}