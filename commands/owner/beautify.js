const Discord = require("discord.js");
const { prefix } = require("../../botconfig.json");
const ownerid = "596345705740763137";
const beautify = require('beautify')
module.exports = {
        config: {
                name: "beautify",
                description: "Eval",
                usage: `${prefix}eval <input>`,
                accessableby: "Owner",
                aliases: ["e"],
                category: "owner"
                
        }, run: async (bot, message, args) => {
                if (args.length >= 2000) {

                        const embed = new Discord.MessageEmbed()
                                .setColor("")
                                .setTitle("<a:error:707045703003668521> Provided arguments is too long")
                                .setDescription("The code must contain 2000 characters, and below.");

                        message.channel.send(embed);
                }
                if (args.length <= 2000) {
                        message.channel.send(`\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``);
                }
        }
}
