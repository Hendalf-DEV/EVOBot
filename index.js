const Discord = require('discord.js');
const config = require('./config.json');

const bot = new Discord.Client({disableEveryone: true});

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/utilities", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/utilities/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)
});

bot.on('ready', async() =>{
    bot.user.setStatus('dnd')
    let allusers = bot.users.cache.size
    let servers = bot.users.cache.size
    const activities_list = [
      "-help",
      `Watching ${bot.guilds.cache.size} servers`,
      `-help for commands`
    ];
    console.log('Ready!')
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        bot.user.setActivity(activities_list[index]); 
    }, 5000);
    console.log(`Serv over ${bot.guilds.cache.size} servers`)  
})

bot.on('messageUpdate', async(oldMessage,newMessage)=>{
    require('./events/guild/messageUpdate')(oldMessage,newMessage)
})

bot.on('messageDelete', async(message)=>{
    require('./events/guild/messageDelete')(message)
})

bot.on("guildCreate", guild => {
    const embed = new Discord.MessageEmbed()
    .setTitle('**Hello!**')
    .setThumbnail(bot.user.displayAvatarURL())
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription('Thanks for inviting me to this server!')
    .addFields(
        { name: 'My prefix is', value: '-', inline: false },
        { name: 'To get more info use', value: '-info', inline: true },
        { name: 'Please create chanenel welcome', value: 'All members that will be join in server automatically get role Member if you have channel welcome', inline: true }
        )
    .setFooter('Stromy bot created with love by Stormy developers')
    .setColor('#00FFFF')
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send(embed)
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}clear`){
        if (message.deletable) {
            message.delete();
        }

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Missing Permissions!").then(m => m.delete(5000));
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("This is not a number").then(m => m.delete(5000));
        }

        let deleteAmount;
        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
            .catch(err => message.reply(`Something went wrong... ${err}`));
    }
})

bot.login(config.token);