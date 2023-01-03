const env = require('dotenv').config()
const Discord = require('discord.js');
const { Intents } = Discord;
const client = new Discord.Client({ 
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
})
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const commands = [
  {
    name: 'test',
    description: 'test',
  },
];
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'test') {
    await interaction.reply('Hello boi!');
  }
});
client.login(process.env.TOKEN)