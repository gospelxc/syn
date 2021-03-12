const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'avatar',
    execute(client, message, args){
        if (!message.guild) return;
        if (message.author.bot) return;
            async function avatar() {
            const GIF = await neko.sfw.avatar();
            const embed = new Discord.MessageEmbed()
            .setColor('#39138b')
            .setDescription(`[Here is a random anime avatar!](${GIF.url})`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            avatar();
    }
}
