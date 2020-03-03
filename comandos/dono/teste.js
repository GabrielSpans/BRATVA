const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if (message.author.id !== "292708406278619136") return message.channel.send(`<@${message.author.id}> | Você não é meu dono!`)

    let user = message.mentions.members.first()
    //if(!user) return message.channel.send("mencione um usúario!")

  message.channel.createWebhook(`${user.tag}`, user.displayAvatarURL)
  .then(webhook => console.log(`Created webhook ${webhook}`))
  .catch(console.error)
}

module.exports.help = {
    name: "teste",
    aliases: ["test"]
}