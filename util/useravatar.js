const Discord = require('discord.js');
 
module.exports = {
    name: 'useravatar',
    description: 'returns a users avatar',
    execute(client, message, args){
        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024, dynamic: true})


        const embed = new Discord.MessageEmbed()
        .setColor('#39138b')
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)

        message.channel.send(embed);
    }
}