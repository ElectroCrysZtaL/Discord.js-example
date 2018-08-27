exports.run = (client, message, args) => {
 const member = message.mentions.users.first();
 
 member.send(`You were warned by ${message.author.username} because: ${args[0]}`)
}
