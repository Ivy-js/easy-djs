/** @format */


const Discord = require("discord.js"); 
const Client = require("./Client"); 


/**
 * @template {keyof Discord.ClientEvents} K
 * @param {Client} client
 * @param {Discord.ClientEvents[K]} eventArgs
 */



function EventFunction(client, ...eventArgs){}




class Event {
    /** 
     * @param {K} event
     * @param {EventFunction<K>} eventFunction
     */


    constructor(event, eventFunction){
        this.event = event; 
        this.run = eventFunction; 
    }
}



module.exports = Event;
// All credits to Ivy.JS (ivy-js on GitHub)