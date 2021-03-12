const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'stats',
    execute(client, message, args){
        if (message.guild) {
            const embed = new Discord.MessageEmbed()
            .setColor('#39138b')
            .setTitle('★ Syn Statistics ★')
            .addField('<a:star_cyan:809187971856597034>  Servers', `\`\`${client.guilds.cache.size}\`\``, true)
            .addField('<a:star_green:809187972254662656> Users (Not Accurate)', `\`\`${client.users.cache.size}\`\``, true)
            .addField('<a:7452_star_blue:809187972339335258>  Memory', `\`\`24 GB\`\``, true)
            .addField('<a:senpai_dance:809187994505838592> Syn Verison', '\`\`v2.1\`\`', true)
            .addField('<a:tada_animated:809188001703133234> Creation Date', '\`\`February, 8th, 2021\`\`', true)
            .addField('<a:bits:809188045558382592> Creator', '\`\`Gospel#4489\`\`', true)
            .addField('<a:cherry_flame:809187975770406912> Anime', `My avatar is based off this anime \`\`Love, Chunibyo & Other Delusions\`\` | [WIKI](https://en.wikipedia.org/wiki/Love,_Chunibyo_%26_Other_Delusions)`)
            .setThumbnail('https://cdn.discordapp.com/attachments/809184456446443530/816894105195118622/ce17c0b62977e426c183ac28749d291e.png')
            message.channel.send(embed);
        }
      }
    }


