const discord = require('discord.js');

module.exports = {
    name: 'invite',
    execute(client, message, args){


        const invite = new discord.MessageEmbed()
        .setColor('39138b')
        .setTitle('★ Syn Invite ★')
        .setThumbnail('https://cdn.discordapp.com/attachments/809184456446443530/816896963685384192/wumpbongo.gif')
        .setDescription('<a:vibing:809188025690488852> Want to add Syn to your server, well use this invite linK! [INVITE](https://discord.com/api/oauth2/authorize?client_id=808572535779622922&permissions=10256&scope=bot)')
        message.channel.send(invite);
    }}
