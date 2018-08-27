
const Discord = require('discord.js');

exports.run = (client, message, args) => {
// Creates an embed
const embed = new Discord.RichEmbed()
.setTitle(client.user.tag)
.setTimestamp()
.setDescription('Code made by ElectroCrysZtaL.')
.setThumbnail(client.user.displayavatarURL)
.addField('Created By' 'ElectroCrysZtaL')
.addField('Created On' client.user.createdAt)
.setFooter('By electrocrysztal')

// Sends the embed
message.channel.send(embed)
}
