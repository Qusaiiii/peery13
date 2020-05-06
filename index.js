// Loading our modules.
const Discord = require('discord.js');
const Cleverbot = require('cleverbot-node');

// Setting up our clients.
const client = new Discord.Client();
const clbot = new Cleverbot();
clbot.configure({botapi: 'CC52k4616pisXEsUkdqa9PkenmQ'});




/*
    This will make the bot reply when it gets mentioned.
    (Thanks to GeopJr for the `message.content.includes` part!)
*/
client.on('message', (message) => {
  if (message.content.includes(client.user.id)) {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
});

/*
    As example, you have a channel named #ai.
    Well, have a chat with the bot in there. No tagging.
*/
client.on('message', async (message) => {
  if (message.author.id == config.bot_id) return;
  if (message.channel.name == 'ai') {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
});

// Login go the bot.
client.login(process.env.BOT_TOKEN);
