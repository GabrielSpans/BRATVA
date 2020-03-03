const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Você não tem permissão")
    if(args[0] == "help"){
        message.reply("Usa: !unmute @user <motivo>");
        return;
    }
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "MUTE_MEMBERS"])) return message.channel.send("Você não tem permissão de adicionar Tags")
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);

let reason = args.slice(1).join(" ");
if(!reason) reason = "Sem motivo"

let muterole = message.guild.roles.find(r => r.name === "Muted")
if(!muterole) return message.channel.send("Não consegui remover!")

mutee.removeRole(muterole.id).then(() => {
    message.delete()
    mutee.send(`Você foi desmutado no ${message.guild.name} por ${reason}`).catch(err => console.log(err))
    message.channel.send(`${mutee.user.username} foi desmutado!`)

});

let onoff = db.get(`modlog.${message.guild.id}.on`)
let channel = db.get(`modlog.${message.guild.id}.channel`)
if (!onoff) return;
if(!channel) return;

if (onoff == true) {
    let logs = message.guild.channels.get(channel)
let embed = new Discord.RichEmbed()
.setAuthor(` Desmutado | Canais de texto e voz`)
.addField(`🔨 Moderador`, `${message.author.username}`)
.addField(`👤 Usuário`, `${mutee.user.username}`)
.addField(`⏱️ Tempo desmutado`, `Permanente`)
.addField(`🔹 ID do usuário`, `${mutee.id}`)
.addField(`📋 Motivo`, `${reason}`)


logs.send(embed)
}


}

module.exports.help = {
    name: "unmute",
    aliases: ["desmutar"]
}