const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
    
    if (message.deletable) {
        message.delete();
    }

    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor('00FFFF')
        .setAuthor(user.username)
        .setImage(user.displayAvatarURL());
    message.channel.send(avatarEmbed);
}

module.exports.config = {
    name: "avatar",
    description: "Shows user avatar",
    usage: `${config.prefix}avatar`,
    accessableby: "Member",
    aliases: ['av', 'avatar', 'logo']
}