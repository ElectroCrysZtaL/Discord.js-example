const Discord = require('discord.js')

exports.run = (client, message, args) => {
  const m = await message.channel.send("pinging...")
  m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms. Made by @ElectroCrysZtaL#0001`)
}
