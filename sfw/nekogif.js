const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'nekogif',
    execute(client, message, args){
        if (!message.guild) return;
            async function nekogif() {
            const GIF = await neko.sfw.nekoGif();
            const embed = new Discord.MessageEmbed()
            .setColor('#39138b')
            .setDescription(`[Click me!](${GIF.url})`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            nekogif();
    }
}