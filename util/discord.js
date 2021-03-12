const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'discord',
    execute(client, message, args){
        if (message.guild) {
            const embed = new Discord.MessageEmbed()
            .setColor('#39138b')
            .setTitle('★ Syn Discord ★')
            .setDescription('<a:nitro_booster:809187981172801598> You can join our official discord, it\'s kinda dead, but I will be there to help anyone. [DISCORD](https://discord.gg/VsHJfCHNab)')
            .setThumbnail('https://cdn.discordapp.com/attachments/809184456446443530/816896963685384192/wumpbongo.gif')
            message.channel.send(embed);
        }
      }
    }


