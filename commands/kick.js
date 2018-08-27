const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const member = message.mentions.members.first() // Mentioned member.
 
await member.kick(); // Kicks the member
console.log(`Sucsessfully kicked ${member.user.tag!}`) // Sends a message in the log when the member is kicked.
};
