exports.run = (client, message, args) => {
  const m = await message.channel.send("pinging...")
  m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms.`)
}
