const Discord = require("discord.js");
const Command = require("./Command.js")
const config = require("../../Config/config.json")
const intents = new Discord.Intents(3276799); // All Intents
const {QuickDB} = require("quick.db")
const fs = require("fs")

require("colors")
class Client extends Discord.Client {
  constructor() {
    super({ intents });

    this.commands = new Discord.Collection(); // Create a new collection for commands
    this.color = config.EmbedColor; // Define the color of the embeds
    this.db = new QuickDB(); // Easy and simple database (French Documentation at : (soooooon))
  }

  async start(token) { // Use the token to login to the bot
    this.login(token);
    this.on("ready", () => { // When the bot is ready
      console.log(`[EasyDJS]`.rainbow + ` Bot : ${this.user.username} is now online!`); // Log that the bot is online
      console.log(
        `[EasyDJS]`.rainbow + ` Bot Stats : ${this.guilds.cache.size} servers, ${this.channels.cache.size} channels, ${this.users.cache.size} users`
      ); // Log the bot's stats

      fs.readdirSync("./djs/Commands").forEach(dirs => {
        fs.readdirSync(`./djs/Commands/${dirs}`).filter(f => f.endsWith(".js")).forEach(file => {

            /**
             * @type {Command}
             */

            const command = require(`../Commands/${dirs}/${file}`)
            console.log("[EasyDJS - Command] ".rainbow + command.name + " loaded succesfully".white)
            this.commands.set(command.name, command)
        })

        fs.readdirSync("./djs/Events").forEach(async dirs => {
          fs.readdirSync(`./djs/Events/${dirs}/`).filter(files => files.endsWith(".js")).forEach(async evt => {

              /**
               * @type {Event}
              */

              const event = require(`../Events/${dirs}/${evt}`)
              console.log("[EasyDJS - Event] ".rainbow + event.event + " loaded succesfully".white)
              this.on(event.event, event.run.bind(null, this))
          })
      })



    })




    }); 
  }



}
module.exports = Client;
// All credits to Ivy.JS (ivy-js on GitHub)