const Discord = require("discord.js");
const config = require("../../Config/config.json")
const intents = new Discord.Intents(3276799); // All Intents
require("colors")
class Client extends Discord.Client {
  constructor() {
    super({ intents });

    this.commands = new Discord.Collection(); // Create a new collection for commands
  }

  async start(token) { // Use the token to login to the bot
    this.login(token);
    this.on("ready", () => { // When the bot is ready
      console.log(`[EasyDJS]`.rainbow + ` Bot : ${this.user.username} is now online!`); // Log that the bot is online
      console.log(
        `[EasyDJS]`.rainbow + ` Bot Stats : ${this.guilds.cache.size} servers, ${this.channels.cache.size} channels, ${this.users.cache.size} users`
      ); // Log the bot's stats
    }); 
  }



}
module.exports = Client;
