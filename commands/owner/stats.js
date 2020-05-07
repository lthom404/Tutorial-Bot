const Discord = require("discord.js");
const { prefix } = require("../../botconfig.json");
const ownerid = "596345705740763137";

module.exports = {
    config: {
        name: "stats",
        description: "Check the bot's stats.",
        usage: `${prefix}stats`,
        accessableby: "Owner",
        aliases: ["s"],
        category: "owner"
    },
    run: async (bot, message, args) => {

        if (message.channel.type == "dm") {
            const embed = new Discord.MessageEmbed()
                .setColor('#5378c8')
                .setTitle("<a:error:707045703003668521> Forbidden")
                .setDescription("This command is disabled through dm.");

            return message.channel.send(embed).then(m => m.delete({timeout:15000}))
        }
        if (message.author.id != ownerid) {
            const embed = new Discord.MessageEmbed()
                .setColor('#5378c8')
                .setTitle("<a:error:707045703003668521> Forbidden")
                .setDescription("Only the bot owner can execute this command");

            return message.channel.send(embed).then(m => m.delete({timeout:15000}))
        }

        let list = bot.guilds.cache.map(guild => `**Name**: \`${guild.name}\` | **Owner**: \`${guild.owner.user.username}\``).join('\n')

        let botembed = new Discord.MessageEmbed()
            .setColor('#5378c8')
            .addField("The bot is currently in these servers", list);
        message.channel.send(botembed).then(m => m.delete({timeout:15000}))
    }
}