const Discord = require("discord.js")
const Event = require("../../Base/Event")
const config = require("../../../Config/config.json")
const allowedUserIDs = {
    1: "INSERT_USER_ID_HERE",
  };
module.exports = new Event("messageCreate", async (client, message) => {
    if (message.author.client) return
    const db = client.db
   

   
        let prefix = config.Prefix

        let messageArray = message.content.split(" ")
        let command = messageArray[0]
        let args = messageArray.slice(1)

      

    


        let commandFile = client.commands.get(command.slice(prefix.length))
        console.log("Recieved : " + message.content)

        if (!message.content.startsWith(prefix)) return
        if(!message.member.permissions.has(new Discord.Permissions(commandFile.permission)) ) return message.reply("Vous n'avez pas la permission requise pour exécuter la commande.")
        if(command.ownerOnly){
            const userAllowed = Object.values(allowedUserIDs).includes(message.author.id)

            if(!userAllowed) return message.reply("Vous n'avez pas la permission requise pour exécuter la commande.")   
        }

        commandFile.run(client, message, args, db)

    
        

})