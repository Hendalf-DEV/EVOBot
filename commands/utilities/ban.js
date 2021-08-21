const Discord = require("discord.js")
const botconfig = require("../../config.json");

module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("You don't have permission to use that command.");
    else {
        let bannedMember = await message.guild.members.ban(message.mentions.members.first());
        if(bannedMember){

        try {
            console.log(bannedMember.tag + " was banned.");
            message.channel.send (`${bannedMember} Have been Banned from The Server!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: "-ban",
    accessableby: "Stuff",
    aliases: ['Ban']
}