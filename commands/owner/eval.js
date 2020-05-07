const Discord = require("discord.js");
const { prefix } = require("../../botconfig.json");
const ownerid = "596345705740763137";
const beautify = require('beautify')
module.exports = {
    config: {
        name: "eval",
        description: "Eval the code",
        usage: `${prefix}eval <input>`,
        accessableby: "Owner",
        aliases: ["e"],
        category: "owner"
    },
    run: async (bot, message, args) => {
        if (message.author.id != ownerid) {
            const embed = new Discord.MessageEmbed()
                .setColor("#5378c8K")
                .setTitle("<a:error:707045703003668521> Forbidden")
                .setDescription("Only the bot owner can execute this command");
    
        return message.channel.send(embed);
        }

        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
                .setColor("#5378c8KK")
                .setTitle("<a:error:707045703003668521> Error")
                .setDescription("I can't evaluate air, sir.")
    
            message.channel.send(embed)
            .then(m => m.delete(5000));
        }

        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                let embed = new Discord.MessageEmbed()
                    .setColor("#5378c8K")
                    .setTitle("<a:error:707045703003668521> Error")
                    .setDescription("Sir, you're trying to evaluate something that involves my token")

                    return message.channel.send(embed);
            }

            const toEval = args.join(" ");
            const evaluated = eval(toEval);

            let embed = new Discord.MessageEmbed()
                .setColor("#5378c8K")
                .setTitle("Eval")
                .addField("To evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
                .addField("Evaluated:", `\`\`\`js\n${evaluated}\n\`\`\``)
                .addField("Type of:", typeof(evaluated))
                .setTimestamp()
                .setFooter(bot.user.username);

            message.channel.send(embed);
        } catch (e) {

            let embed = new Discord.MessageEmbed()
                .setColor("#5378c8K")
                .setTitle("<a:error:707045703003668521> Error")
                .setDescription(e)
                .setFooter(bot.user.username, bot.user.displayAvatarURL());

            message.channel.send(embed);
        }
    }
}