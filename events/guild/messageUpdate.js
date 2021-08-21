const {MessageEmbed} = require('discord.js')
module.exports=async(oldMessage,newMessage)=>{
    let embed = new MessageEmbed()
    .setTitle(`Message Edited`)
    .setColor(`RED`)
    .setDescription(`**The User ${oldMessage.author} edited message in channel <#${oldMessage.channel.id}>**`)
    .addField(`Before`, `${oldMessage.content}`)
    .addField(`After`, `${newMessage.content}`)
    let channel = oldMessage.guild.channels.cache.find(ch=>ch.name==="logs")
    if(!channel)return;
    channel.send(embed)
}