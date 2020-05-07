module.exports = async bot => {
     console.log(`${bot.user.username} is online`)

    let statuses = [
        `${bot.guilds.cache.size} servers!`,
        "!help",
        `over ${bot.users.cache.size} users!`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

}