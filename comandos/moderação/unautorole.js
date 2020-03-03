const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Sem permissão!')

    db.delete(`autorole_${message.guild.id}`)

}

module.exports.help = {
    name: "unautorole",
    aliases: ["offautorole", "offrole"]
}