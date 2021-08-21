const Discord = require("discord.js")
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }

    const exampleEmbed = {
        color: 0x00ffff,
        title: 'Stormy bot support server',
        url: 'https://discord.gg/qD4Qg2N',
        author: {
            name: 'Stormy bot',
            icon_url: 'https://i.imgur.com/Jkp88QH.png',
            url: 'https://i.imgur.com/Jkp88QH.png',
        },
        description: 'Stormy bot commands',
        thumbnail: {
            url: 'https://i.imgur.com/Jkp88QH.png',
        },
        fields: [
            {
                name: 'Fun',
                value: '\u200b',
            }, 
            {
                name: 'meme',
                value: 'Find and send memes to channel from reddit',
            },
            {
                name: 'avatar',
                value: 'Shows avatar by mention or without',
            },
            {
                name: '\u200b',
                value: '\u200b',
                inline: false,
            },
            {
                name: 'Utilities',
                value: '\u200b',
            },
            {
                name: 'clear (value)',
                value: 'clears messages',
            },
            {
                name: 'kick',
                value: 'kick mentioned user',
            },
            {
                name: 'help (command name)',
                value: 'Shows info about command that hav been mentioned',
            },
            {
                name: 'ban',
                value: 'Ban member by mention',
            },
            {
                name: 'help',
                value: 'Shows commands',
            },
            {
                name: 'memberinfo',
                value: 'shows info about member',
            },
        ],
        timestamp: new Date(),
        footer: {
            text: 'By Stormy Developers',
            icon_url: 'https://i.imgur.com/Jkp88QH.png',
        },
    };
    
    message.channel.send({ embed: exampleEmbed })};

module.exports.config = {
    name: "help",
    description: "Show commands",
    usage: `${config.prefix}help`,
    accessableby: "Member",
    aliases: ['help']
}