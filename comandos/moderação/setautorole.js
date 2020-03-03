const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Sem permissão!')

    if(!args[0]) return message.reply("Mencione uma role")

    let roleName = args.slice(0).join(" ");
        let role = message.guild.roles.find(role => role.name === roleName)
        db.set(`autorole.${message.guild.id}`, roleName)
        message.channel.send("ok")

}

module.exports.help = {
    name: "setautorole",
    aliases: []
}