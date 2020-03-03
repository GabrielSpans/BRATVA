const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  
    if(!message.member.hasPermission("KICK_MEMBERS") || !message.guild.owner) return message.channel.send("Você não tem permissão")
  
    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Você não tem permissão de expulsar membros")
    
    let command = message.content.split(" ")[0];

    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Mencione um membro válido deste servidor");
    if(!member.kickable) 
      return message.reply("Não consigo chutar esse usuário! Eles têm uma função mais alta? Tenho permissões de chute? ");
    
   
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida";
    
   
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não pude kikar por causa de: ${error}`));
    message.reply(`${member.user.tag} foi expulso!`);

    let onoff = db.get(`modlog.${message.guild.id}.on`)
let channel = db.get(`modlog.${message.guild.id}.channel`)
if (!onoff) return;
if(!channel) return;

if (onoff == true) {
    let logs = message.guild.channels.get(channel)
let embed = new Discord.RichEmbed()
.setColor("BLACK")
.setAuthor(`🔨 | Privatizar membros (kick)`)
.setDescription(`Autor: ${message.author.username}\n${message.author.id}\nExpulso: ${member.user.tag}\n${member.id}`)

logs.send(embed)
}

  }


  module.exports.help = {
    name: "kick",
    aliases: ["expulsar", "kikar", "kickar"]
}