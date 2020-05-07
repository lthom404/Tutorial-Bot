const { prefix } = require("../../botconfig.json")
const { bot } = require("../../index")
const {MessageEmbed} = require("discord.js")
module.exports = async (bot, message) => {
    if (message.author.bot || message.channel.type === "dm") return;
    if (message.content.includes(bot.user.id)) {
        const embed = new MessageEmbed()
            .setColor("#5378c8")
            .setTitle(`You summoned me \`${message.author.username}\`! I'm assuming that you need my little help?`)
            .setDescription("Do \`=help\` for my commands!")
        return message.channel.send(embed);
    }
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if (commandfile) commandfile.run(bot, message, args)
}