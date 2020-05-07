const Discord = require('discord.js')


module.exports.run = async (Bot, message, args, member) => {
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("You can\'t delete messages.....").then(m => m.delete(5000));
    }

    if(isNaN(args[0]) || parseInt(args[0]) <=0) {
        return message.reply("Yeah....thats not a number? I also cant delete 0 messages by the way.").then(m => m.delete(5000));
    }
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Sorryyyy... I cant delete messages.").then(m => m.delete(5000));
    }

    let deleteAmount;

    if(parseInt(args[0]) > 100) {
        deleteAmount = 100;
    }else{
        deleteAmount = parseInt(args[0]);
    }
    message.channel.bulkDelete(deleteAmount, 1000)
    .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`)).then(m => m.delete({timeout: 15000}))
    .catch(err => message.reply(`Something went wrong....${err}`));
}
module.exports.config = {
    name: 'clear',
    usage: "=clear <no. of messages>",
    aliases: ["purge"],
    description: "Clears the messages in a channel",
    accessableby: `Admins`,
    category: "moderation"
}