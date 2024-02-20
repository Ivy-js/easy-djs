/** @format */
const Discord = require("discord.js")
const Client = require("./Client")

/**
 * 
 * @param {Client} client 
 * @param {Discord.Message | Discord.Interaction} message 
 * @param {string[]} args 
 */
function RunFunction (client, message, args){}

class Command {

    /**
     * @typedef {{name: string, description: string, use: string, permission : bigint, cooldown : number, category : string, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options 
     */

    constructor(options){
        this.name = options.name // Define the name of the command
        this.description = options.description // Define the description of the command
        this.use = options.use // Define the usage of the command
        this.permission = options.permission // Define the permission of the command
        this.ownerOnly = options.ownerOnly // Define if the command is owner only
        this.category = options.category // Define the category of the command
        this.run = options.run // Run the code inside of the run function
    }

}
module.exports = Command;

// All credits to Ivy.JS (ivy-js on GitHub)