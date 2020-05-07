const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")

module.exports.run = async (bot,message, args) => {   
     const embed = new Discord.MessageEmbed() 
     .setTitle("Links")
     .setColor("#5378c8")
     .setDescription("[Bot Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=704837167477948506&permissions=8&scope=bot)\n[Bot Support Server Invite](https://discord.gg/B4TNdNq)")
    message.channel.send(embed)
    }

module.exports.config = {
    name: "invite",
    aliases: ["inv"],
    description: "Shows the bot invite and support server invite.",
    usage: "=invite",
    accessableby: "Members",
    category: "information"
}