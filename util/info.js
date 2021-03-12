const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'info',
    execute(client, message, args){
        if (message.guild) {
            const embed = new Discord.MessageEmbed()
            .setColor('#39138b')
            .setTitle('★ Information ★')
            .addField('<a:love_inject:809187998154489886> Love Message', 'Thank you for using this bot, I wouldn\'t think this bot would be in more then 100 servers, I just made it has a project to learn and grow my knowledge.')
            .addField('<a:broken:809169518780743740> Message from Gospel', 'Want me to make the code public? Do >discord, and react to this [message](https://discord.com/channels/805659912985641000/812232954243186699/816900322962046976).')
            .setImage('https://cdn.discordapp.com/attachments/809184456446443530/816904025303810058/ezgif-6-4cdcbcbf3e84.gif')
            message.channel.send(embed);
        }
      }
    }


