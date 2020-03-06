const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    let embed = new Discord.MessageEmbed()

    .setImage('https://cdn.discordapp.com/attachments/640757536093503488/662867131020476417/IMG-20191113-WA0000.jpg')
    
    message.channel.send(embed)
}

module.exports.help = {
    name: 'hello',
    aliases: ['span']
}