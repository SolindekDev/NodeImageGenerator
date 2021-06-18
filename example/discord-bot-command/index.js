// Template from https://discord.js.org/
const Discord = require('discord.js');
const client = new Discord.Client();
// We import our package to code
const imageGenerator = require('nodeimagegenerator')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === 'dog') {
      //We send a image URL
      msg.reply(imageGenerator.randomDog)
      msg.channel.send('Powered by NodeImagGenerator')
    }
});

client.login('token');