const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")

module.exports.run = async (bot,message, args) => {
    message.delete()   
    if (message.author.id !="596345705740763137") return message.channel.send("You are not the bot owner!").then(m => m.delete({timeout:15000}))
     if(!args[0]) return message.channel.send("Please provide a command to reload!").then(m => m.delete({timeout:15000}))
     
     let commandName = args[0].toLowerCase()
    
    try{
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
        }catch(e) {
            return message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\``).then(m => m.delete({timeout:15000}))            
        }
        const rEmbed = new Discord.MessageEmbed()
        .setColor("#5378c8")
        .setTitle(`The command \`${args[0].toUpperCase()}\` has been reloaded`)
        
        message.channel.send(rEmbed).then(m => m.delete({timeout:15000}))
    }

module.exports.config = {
    name: "reload",
    aliases: ["creload"],
    description: "Reloads a command",
    usage: "=reload",
    accessableby: "Bot Owner",
    category: "owner"
}