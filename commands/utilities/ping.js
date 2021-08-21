const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }

message.channel.send("Pinging...").then(m => {
    let ping = m.createdTimestamp - message.createdTimestamp
    let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"]
    let response = choices[Math.floor(Math.random() * choices.length)]

    m.edit(`${response}: Bot Latency: \`${ping}\`, API Latency: \`${Math.round(bot.ping)}\``)
})
}

module.exports.config = {
    name: "Ping",
    description: "Shows bot ping",
    usage: `${config.prefix}ping`,
    accessableby: "Members",
    aliases: ['ping']
}