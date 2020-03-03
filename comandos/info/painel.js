const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    //const member = message.mentions.members.first()

    let embed = new Discord.RichEmbed()

    .setAuthor(`Painel | Eventos`)

    message.channel.send(embed)
}

module.exports.help = {
    name: 'painel',
    alises: []
}