const {MessageEmbed} = require("discord.js")
const botconfig = require("../../botconfig.json")
const prefix = botconfig.prefix
const {stripIndents} = require('common-tags')
const { readdirSync } = require("fs")

module.exports.run = async (bot,message, args) => {
       message.delete();
       const embed = new MessageEmbed()
       .setColor("#5378c8")
       .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
       .setThumbnail(bot.user.displayAvatarURL())

   if(!args[0]) {
       const category = readdirSync('./commands/')

       embed.setDescription(`These are the avaliable commands for ${message.guild.me.displayName}\nThe bot prefix is: **${prefix}**`)
       embed.setFooter(`© ${message.guild.me.displayName} | Total Commands: ${bot.commands.size}`, bot.user.displayAvatarURL());

        category.forEach(category => {
            let dirs = bot.commands.filter(c => c.config.category === category)
            let capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
            try {
                embed.addField(` ${capitalise} [${dirs.size}]:`, dirs.map(c => `\`${c.config.name}\``).join(" | "))
                } catch(e) {
            }
        })

       return message.channel.send(embed)
   } else {
       let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
       if(!command) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${prefix}help\` for the list of the commands.`))
       command = command.config

       embed.setDescription(stripIndents`The bot's prefix is: \`${prefix}\`\n
       **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
       **Description:** ${command.description || "No Description provided."}
       **Usage:** ${command.usage ? `\`${command.usage}\`` : "No Usage"}
       **Accessible by:** ${command.accessableby || "Members"}
       **Aliases:** ${command.aliases ? command.aliases.join(", ") : "None."}`)

       return message.channel.send(embed)
   }
}

module.exports.config = {
    name: "help",
    aliases: ["h" , "halp" , "commands"],
    usage: "=help | =help <command> ",
    description: "This command shows all the commands.",
    accessableby: "Members",
    category: "information"
}