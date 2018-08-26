// Made by @ElectroCrysZtaL#0001
// just a watermark for people who copy my stuff 

const Discord = require('discord.js'); // Loads up the discord.js library
// You can see the whole library by going to discord.js.org

const client = new Discord.Client();
// This is our client, or as you can call "bot"
// Some people name it "bot" or whatever it is, but i'll still take that as "client"
const prefix = '!'
client.on('ready', () => {
    console.log(`${client.user.tag} has logged in!`);
    // When the bot is ready, in the console it will say "<botuser + tag> has logged in!"
});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

client.on('message', async message => {
    // This is an event that will run every messages you sent.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // Run several messages in your command.
  const command = args.shift().toLowerCase(); 
  
  // command handler
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login('v.Muh28YVn286s3f02jD3289.2THISISNOTATOKEN!ue93V3u'); // This is not a token btw (just in case for blind ppl)
