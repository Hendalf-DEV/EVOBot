const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }

    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("You don't have permission to use that command.");
    else {
        let member = message.guild.member(message.mentions.users.first());
        if(member) {
        try {
            await member.kick();
            console.log('Kicked');
            message.channel.send(`${member}, Kicked!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: `${config.prefix}kick`,
    accessableby: "Admins",
    aliases: []
}