const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if (message.deletable) {
        message.delete();
    }

    const inviteEmbed = new Discord.MessageEmbed()
    .setAuthor('Stormy Official', 'https://i.imgur.com/oWVZ8mw.png', 'https://discord.gg/xCUtE2k')
    .setThumbnail('https://i.imgur.com/oWVZ8mw.png')
    .setTitle('Stormy Official Bot')
    .setDescription('**[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=725142817810284635&permissions=8&scope=bot)!                [Join Support Server](https://discord.gg/xCUtE2k)**')
    .setColor('00FFFF')
    message.channel.send(inviteEmbed);
}

module.exports.config = {
    name: "invite",
    description: "Show bot invite and support server",
    usage: "-invite",
    accessableby: "Member",
    aliases: ['invite']
}