const Discord = require('discord.js')

exports.run = (client, message, args) => {
message.channel.send(args[0])
}
