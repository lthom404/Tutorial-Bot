const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")

module.exports.run = async (bot,message, args) => {
    message.delete();    
    const embed = new Discord.MessageEmbed()
    .setTitle("You are not the bot owner!")    
    .setColor("#5378c8K")
    if (message.author.id !="596345705740763137") return message.channel.send("You are not the bot owner!")
        try{
            const restartEmbed = new Discord.MessageEmbed()
            .setTitle("Bot is restarting....")
            .setColor("#5378c8K")
            await message.channel.send(restartEmbed)
            process.exit(0)
            
        }catch(e) {
            message.channel.send(`ERROR: ${e.message}`)
        }
    }

module.exports.config = {
    name: "restart",
    aliases: ["botrestart"],
    description: "Restarts the bot",
    usage: "=restart",
    accessableby: "Bot Owner",
    category: "owner"
}