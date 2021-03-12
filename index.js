const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
let fs = require('fs');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

client.on('ready', () => {
  console.log(`Bot tag: ${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.cache.size}`);
  client.user.setActivity(`>help`, { type: 'WATCHING' });
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./nsfw/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
  const command = require(`./nsfw/${file}`);

  client.commands.set(command.name, command);
}
client.on('message', async message => {
  if (message.content.startsWith(`${prefix}`)) {
    let file_name = `${message.content.split(' ')[0].replace(prefix, '')}.js`;
    if(!fs.existsSync('./nsfw/' + file_name)) return undefined;
    if(fs.existsSync('./nsfw/' + file_name)) {
      client.commands.get(file_name.replace('.js', '')).execute(client, message);
    }
  }
});

const commandFiles2 = fs.readdirSync('./sfw/').filter(file => file.endsWith('.js'));
for(const file of commandFiles2) {
  const command = require(`./sfw/${file}`);

  client.commands.set(command.name, command);
}
client.on('message', async message => {
  if (message.content.startsWith(`${prefix}`)) {
    let file_name = `${message.content.split(' ')[0].replace(prefix, '')}.js`;
    if(!fs.existsSync('./sfw/' + file_name)) return undefined;
    if(fs.existsSync('./sfw/' + file_name)) {
      client.commands.get(file_name.replace('.js', '')).execute(client, message);
    }
  }
});

const commandFiles3 = fs.readdirSync('./util/').filter(file => file.endsWith('.js'));
for(const file of commandFiles3) {
  const command = require(`./util/${file}`);

  client.commands.set(command.name, command);
}
client.on('message', async message => {
  if (message.content.startsWith(`${prefix}`)) {
    let file_name = `${message.content.split(' ')[0].replace(prefix, '')}.js`;
    if(!fs.existsSync('./util/' + file_name)) return undefined;
    if(fs.existsSync('./util/' + file_name)) {
      client.commands.get(file_name.replace('.js', '')).execute(client, message);
    }
  }
});

client.login(token);
