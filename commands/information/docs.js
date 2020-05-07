const fetch = require("node-fetch")
const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
message.delete();
let query = args.join(' ');
let djsurl = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`;

if(!query) {
    const rEmbed = new Discord.MessageEmbed()
    .setColor("#5378c8")
    .setTitle(":x: Missing Arguments")
    .setDescription("Please provide a query to search. `=docs <query>`");

    return message.channel.send(rEmbed);
}
fetch(djsurl)
.then(res => res.json())
    .then(embed => {
    if(embed && !embed.error) {
        message.channel.send({ embed });
    } else {
        const fEmbed = new Discord.MessageEmbed()
            .setColor("#5378c8")
            .setTitle(":x: Error")
            .setDescription(`Sorry, but \`${query}\` isn't in the discord.js-stable documentation.`);

        message.channel.send(fEmbed);
    }
})

    .catch(e => {
    console.error(e);
        const dEmbed = new Discord.MessageEmbed()
            .setColor("#5378c8")
            .setTitle(":x: Error")
            .setDescription("Something went wrong. Please try again!");

        message.channel.send(dEmbed);
    })
}

module.exports.config = {
    name: "docs",
    description: "Shows DJS docs",
    aliases: ["djs" , "doc"],
    accessableby: "Members",
    usage: "=docs <query>",
    category: "information"
}