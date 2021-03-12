const Discord = require('discord.js');
const moment = require('moment');
 
module.exports = {
    name: 'userinfo',
    description: 'returns a users avatar',
    execute(client, message, args, member){

        let user = message.mentions.users.first() || message.author;
        
        const joinDiscord = moment(user.createdAt).format('llll');
        
        const joinServer = moment(user.joinedAt).format('llll');
     
         let roles = ""

    if(message.guild.members.cache.get(user.id).roles.cache.array().length != 0) {
        message.guild.members.cache.get(user.id).roles.cache.forEach(role => roles += `${role} `)
    } else {
        roles = "No roles to display."
    }
        

    
        
        let embed = new Discord.MessageEmbed()
            .setAuthor(`Syn`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`${user} | \`\`${user.id}\`\``)
            .setColor(`#39138b`)
            .setThumbnail(`${user.displayAvatarURL({dynamic: true})}`)
            .addFields(
                {
                    name: `User Information`,
                    value: `\> Account Creation Date: ${moment.utc(user.createdAt).format('MM/DD/YY')}\n\> Username: ${user.username}\n\> Tag: ${user.discriminator}\n\> Is bot: ${user.bot}`,
                    inline: true
                },
                {
                    name: `Guild Information`,
                    value: `\n\> Guild Name: ${message.guild}\n\> Emoji Count: ${message.guild.emojis.cache.size}\n\> Role Count: ${message.guild.roles.cache.size}\n\> Guild Members: ${message.guild.memberCount}`,
                    inline: true
                },
                {
                    name: `Server Roles`,
                    value: `${roles}`,
                    inline: false
                }
            )
            //.addField('Account Creation Date:', `${user.createdAt}`)
            //.addField('Server Join Date:', `${user.joinAt}`)
            .setFooter(`Syn Development`)
            .setTimestamp();
    

        message.channel.send(embed);
        return;
    }
}
