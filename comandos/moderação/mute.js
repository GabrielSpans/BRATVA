const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Você não tem permissão")
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "MUTE_MEMBERS"])) return message.channel.send("Você não tem permissão de adicionar Tags")
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if (!mutee) return message.channel.send('VocÊ não especificou um usúario ou um ID valido!');

let reason = args.slice(1).join(" ");
if(!reason) reason = "Não Definido"

let muterole = message.guild.roles.find(r => r.name === "Muted")
if(!muterole) {
    try{
         muterole = await message.guild.createRole({
            name: "Muted",
            color: "RANDOM",
            permissions: []
        
         })
             message.guild.channels.forEach(async (channel, id) => {
             await channel.overwrItePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                SPEAK: false
            })
         })
    } catch (e) {
        console.log(e.stack);
    }
}

mutee.addRole(muterole.id).then(() => {
    message.delete()
    mutee.send(`Você foi mutado em ${message.guild.name}\nModerador: ${message.author.username}\nMotivo: ${reason}`)
    message.channel.send(`<@${mutee.id}> Mutado com sucesso!`)
});

if (mutee.roles.has(muterole.id)) return message.channel.send('Esse usúario já esta mutado!');

let onoff = db.get(`modlog.${message.guild.id}.on`)
let channel = db.get(`modlog.${message.guild.id}.channel`)
if (!onoff) return;
if(!channel) return;

if (onoff == true) {
    let logs = message.guild.channels.get(channel)
let embed = new Discord.RichEmbed()
.setAuthor(`Mutado | Canais de texto e voz`)
.addField(`🔨 Moderador`, `${message.author.username}`)
.addField(`👤 Usuário`, `${mutee.user.username}`)
.addField(`⏱️ Tempo mutado`, `Permanente`)
.addField(`🔹 ID do usuário`, `${mutee.id}`)
.addField(`📋 Motivo`, `${reason}`)

logs.send(embed)
}
}

module.exports.help = {
    name: "mute",
    aliases: ["mutar", "silenciar"]
}