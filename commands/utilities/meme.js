const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }

    const subReddits = ["meme", "me_irl", "dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);

}

module.exports.config = {
    name: "meme",
    description: "",
    usage: `${config.prefix}meme`,
    accessableby: "Members",
    aliases: []
}