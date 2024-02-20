const { Permissions, MessageEmbed } = require("discord.js");
const Command = require("../../Base/Command");

module.exports = new Command({
    name: "ping",
    description: "Retrun the bot's ping",
    use: "ping",
    perm: Permissions.FLAGS.VIEW_CHANNEL,
    category: "Utils",
    ownerOnly: false,

    async run(client, message, args) {
      message.reply({content : `Pinging...`}).then(m => {
        const ping = m.createdTimestamp - message.createdTimestamp;
        const embed = new MessageEmbed()
        .setTitle("Pong!")
        .setDescription(`Bot's ping : ${ping}ms`)
        .setColor(client.color)
        m.edit({content : null, embeds : [embed]})
      })
    },
});