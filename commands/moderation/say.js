const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let argsresult;
    let mChannel = message.mentions.channels.first()
    message.delete()
    if (!message.member.hasPermission("ADMINISTRATOR")){
        const saEmbed = new Discord.MessageEmbed()
        .setTitle(":x: You dont have permission to use this command! :x:")
    return message.channel.send(saEmbed).then(m => m.delete({ timeout: 5000 }))
    }
    if (mChannel) {
        argsresult = args.slice(1).join(" ")
        const sEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} Announcement`)
            .setColor('#5378c8')
            .setDescription(`${argsresult}`)
            .setFooter(`${bot.user.username} | Announcement`, `${bot.user.displayAvatarURL()}`)
        mChannel.send({ embed: sEmbed, content: "@everyone" })

    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
}

module.exports.config = {
    name: "say",
    aliases: ["announce\`", "announcement"],
    usage: "=say <channel> <text> | =say <text>",
    description: "Sends announcement or message",
    accessableby: 'Admins',
    category: "moderation"
}