const Discord = require('discord.js');
const { prefix } = require('../config.json');
const { color } = require('../config.json');

module.exports = {
    name: 'servers',
    execute(client, message, args){
        if(message.author.id !== '372528587053465600') return;
        if (message.guild) {
        const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(25);
        
        const description = guilds.map((guild, index) => {
            return `${index+1}. ${guild.name} > ${guild.memberCount} members`
        }).join('\n')

        const png = client.user.displayAvatarURL()
        
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("#39138b")
            .setThumbnail(png)
            .setDescription(description)
        )
    }
    
}
}

