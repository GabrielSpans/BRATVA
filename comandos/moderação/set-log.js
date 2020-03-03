const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Sem permissão!')
    
    if (!args[0]) {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Configurações do ModLogs')
        .setDescription("Use on Para ligar, off para desligar e channel para definir um canal de Logs!")
        message.channel.send(embed)
    } else if(args[0] == "on") {
        let onoff = db.get(`modlog.${message.guild.id}.on`)
        if (onoff == true) return message.channel.send("O modLogs foi ligado!")
        message.channel.send('Modlogs ligado!')
        db.set(`modlog.${message.guild.id}.on`, true)
    } else if(args[0] == "off") {
        let onoff = db.get(`modlog.${message.guild.id}.on`)
        if (onoff == false) return message.channel.send("O modLogs foi desligado!")
        message.channel.send('Modlogs desligado!')
        db.set(`modlog.${message.guild.id}.on`, false)
    } else if(args[0] == "channel") {
        let channel = message.mentions.channels.first()
        let datachannel = db.get(`modlog.${message.guild.id}.channel`)
        if (!channel) return message.channel.send('Mencione um canal de logs valido!')
        if (channel.id == datachannel) return message.channel.send('O modlogs Já esta setado nesse canal!')
        message.channel.send("Sucesso! Canal de logs setado em: " + channel)
        db.set(`modlog.${message.guild.id}.channel`, channel.id)
    }
}

module.exports.help = {
    name: "set-log",
    aliases: ["set-logs", "logchannel"]
}