const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    
  if(!message.member.hasPermission('BAN_MEMBERS')) {
    return message.channel.send(`${message.author} você não possui permissão para usar esse comando.`)
    
  }
    
    let command = message.content.split(" ")[0];

    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Mencione um membro válido deste servidor");
    if(!member.bannable) 
      return message.reply("Não posso banir este usuário! Eles têm uma função mais alta? Tenho permissões de banimento?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida";
    
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não pude banir por causa de: ${error}`));
    message.channel.send(`${member.user.tag} foi banido!`)


    let onoff = db.get(`modlog.${message.guild.id}.on`)
let channel = db.get(`modlog.${message.guild.id}.channel`)
if (!onoff) return;
if(!channel) return;

if (onoff == true) {
    let logs = message.guild.channels.get(channel)
let embed = new Discord.RichEmbed()
.setColor("BLACK")
.setAuthor(`🔨 | Privatizar bans (Membro)`)
.setDescription(`Author: ${message.author.username}\n${message.author.id}\nBanido: ${member.user.tag}\n${member.id}`)

logs.send(embed)
}
  }

  module.exports.help = {
    name: "ban",
    aliases: ["banir", "banned"]
}