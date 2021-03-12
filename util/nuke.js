const discord = require('discord.js');

module.exports = {
    name: 'nuke',
    execute(client, message, args){



    // if the member don't have this perm return by sending this msg
                    const noperms1 = new discord.MessageEmbed()
    .setColor('39138b')
    .setDescription('I don\'t have ``MANAGE_CHANNELS``, please allow me to have them. then retry!')
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(noperms1)
        
      const noperms = new discord.MessageEmbed()
          .setColor('39138b')
      .setDescription('You don\'t have ``MANAGE_CHANNELS``!')
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(noperms)
        

    // getting the channel's id that is gonna be nuked
    var channel = client.channels.cache.get(message.channel.id)

    // getting the position of the channel by the category
    var posisi = channel.position

    const embed = new discord.MessageEmbed()
    .setColor('#39138b')
    .setDescription('**CHANNEL NUKED**')

   // clonning the channel
    channel.clone().then((channel2) => {
        
        // sets the position of the new channel
        channel2.setPosition(posisi)

        // deleting the nuked channel
        channel.delete()

        // sending a msg in the new channel
        channel2.send(embed).then(
          
            // sends a GIF in the new channel
            channel2.send(`https://tenor.com/view/explosion-explode-clouds-of-smoke-gif-17216934`)
        )
    })
    }}
