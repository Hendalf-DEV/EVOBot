const Discord = require ("discord.js");
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }

    let sEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Role Count:**", `${message.guild.roles.size}`, true)
        .setFooter(`Stormy Bot | By Stormy Devs`, bot.user.displayAvatarURL);
    message.channel.send(sEmbed);
}

    module.exports.config = {
    name: "Server info",
    description: "Shows info about server",
    usage: `${config.prefix}server`,
    accessableby: "Members",
    aliases: ['server', 'info']
}