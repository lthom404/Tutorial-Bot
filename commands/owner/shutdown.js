const Discord = require("discord.js");
const { prefix } = require("../../botconfig.json");
const ownerid = "596345705740763137";

module.exports = {
    config: {
        name: "Shutdown",
        description: "Shutdown the bot",
        usage: `${prefix}sd`,
        accessableby: "Owner",
        aliases: ["shutdown","sd"],
        category: "owner",
    },
    run: async (bot, message, args) => {
    message.delete();
    if (message.channel.type == "dm") {
        const embed = new Discord.MessageEmbed()
        .setColor("#5378c8")
        .setTitle("<a:error:707045703003668521> Forbidden")
        .setDescription("This command is disabled through dm.")

    return message.channel.send(embed);
    }
    if (message.author.id != ownerid) {
        const embed = new Discord.MessageEmbed()
            .setColor("#5378c8")
            .setTitle("<a:error:707045703003668521> Forbidden")
            .setDescription("Only the bot owner can execute this command")

    return message.channel.send(embed).then(m => m.delete({timeout:30000}))
    }
    let embed = new Discord.MessageEmbed()
    .setColor("#5378c8")
    .setTitle("Shutting down verification")
    .setDescription("Are you sure you want to shut down the **entire** bot?")

    const newMessage = await message.channel.send(embed)
    
        newMessage.react("✅").then(() => newMessage.react("❌"));
    
        const filter = (reaction, user) => {
            return ["✅", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
        };
    
        newMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(async collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === "✅") {
                let embed = new Discord.MessageEmbed()
                .setColor("#5378c8")
                .setTitle("I'm shutting down")

            await message.channel.send(embed).then(m => m.delete({timeout:30000}))
                process.exit();
            } else {
                let embed = new Discord.MessageEmbed()
                .setColor("#5378c8")
                .setTitle("Lets pretend that didn't happen.")

            message.channel.send(embed).then(m => m.delete({timeout:30000}))
            }
        })
        .catch(collected => {
            let embed = new Discord.MessageEmbed()
                .setColor("#5378c8")
                .setTitle("Waiting for your react!")
                .setDescription("You reacted with neither a tick, nor a cross.")


            message.channel.send(embed).then(m => m.delete({timeout:30000}))
        });
    } 
}