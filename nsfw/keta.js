const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'keta',
    execute(client, message, args){
        var nsfw = new Discord.MessageEmbed()
		.setColor(`#39138b`)
		.setDescription('<a:broken:809169518780743740> Hey! I can only send ``NSFW`` images in ``NSFW`` channels!')
    .setTimestamp()
		.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL())

    if (!message.channel.nsfw) return message.channel.send(nsfw)
        if (!message.guild) return;
            async function keta() {
            const GIF = await neko.nsfw.keta();
            const embed = new Discord.MessageEmbed()
            .setColor('#39138b')
            .setDescription(`[Click me!](${GIF.url})`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            keta();
    }
}