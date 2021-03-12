const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'sfw',
    execute(client, message, args){
        if (message.guild) {
            const embed = new Discord.MessageEmbed()
            .setColor('#39138b')
            .setTitle('★ SFW ★')
            .setDescription('Prefix: \`>\`')
            .addField('<:bae:808905192686354432> Quick Information', '\`If you need any help with any command, please join our discord, use >discord\`')
            .addField('<a:zerotwo:809169518273626203> Commands', '```hug, kiss, pat, slap, tickle, poke, cuddle, feed, cat, dog, goose, smug, baka, neko, nekogif, lizard, foxgirl, holo, wallpaper, avatar, waifu```')
            .setImage('https://cdn.discordapp.com/attachments/809184456446443530/816904025303810058/ezgif-6-4cdcbcbf3e84.gif')
            message.channel.send(embed);
        }
      }
    }


