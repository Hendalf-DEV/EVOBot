const {MessageEmbed} = require('discord.js')
module.exports=async(message)=>{
    let embed = new MessageEmbed()
    .setTitle(`Message Deleted`)
    .setDescription(`**User ${message.author} message deleted in channel <#${message.channel.id}> **`)
    .addField(`Content`, `${message.content}`)
    .setColor(`RED`)
    let channel = message.guild.channels.cache.find(ch=>ch.name==="logs")
    if(!channel)return;
    channel.send(embed)

}