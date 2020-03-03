const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

message.delete()

    let target = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!target) return message.channel.send("Por favor mencione um usúario").then(m => m.delete(15000))


    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send(`Por favor, providencie a rasão pelo report de **${target.user.tag}**`).then(m => m.delete(15000))


    let sChannel = message.guild.channels.find(x => x.name === "relatório")



    message.channel.send("Você reportou um usúario, muito obrigado!").then(m => m.delete(15000))
    sChannel.send(`**${message.author.tag}** Reportou **${target.user.tag}** por: ``${reason}``.`)
    }

    module.exports.help = {
        name: "report",
        aliases: ["reportar"]
    }