const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_ROLES') || !message.guild.owner) return message.channel.send("You dont have permission to use this command!");

    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to add roles!")

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!mutee) return message.channel.send('Please specify a user to be muted!')

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given"

    let muterole = message.guild.roles.cache.find(r => r.name === "Muted")

    if (!muterole) {
        try {
            muterole = await message.guild.roles.create({
                name: "Muted",
                color: "RED",
                permissions: []
            })
            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTTACH_FILES: false,
                    SPEAK: false,
                })
            })
        } catch (e) {
            console.log(e.stack);
        }
    }

    mutee.roles.add(muterole.id).then(() => {
        message.delete()
        mutee.send(`Hello, you have been muted in **${message.guild.name}** for: **${reason}**`)
        message.channel.send(`${mutee.user.username} was successfully muted.`).then(m => m.delete({timeout: 5000}))
    })

    let mEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`__**Modlogs**__`)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .addField("**Moderation:**", 'Mute')
        .addField(`**Mutee:**`, `${mutee.user.username}`)
        .addField("**Moderator:**", `${message.author.username}`)
        .addField("**Date:**", message.createdAt)
        .setFooter('The Anonymous Community Bot Created By: Lachlan T.#3964 ', Bot.user.displayAvatarURL());

    let sChannel = message.guild.channels.cache.find(c => c.name === "modlogs")
    sChannel.send(mEmbed)
}

module.exports.config = {
    name: 'mute',
    usage: '=mute <member> (reason)',
    aliases: ["m", "notalk"],
    accessableby: `Admins`,
    description: `Mutes a member`,
    category: "moderation"
}