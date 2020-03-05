const Discord = require('discord.js')
const db = require('quick.db')

const moment = require("moment")
moment.locale("pt-BR")

module.exports = (client, oldMember, newMember) => {
  
  try {

  let onoff = db.get(`modlog.${oldMember.guild.id}.on`)
let channel = db.get(`modlog.${oldMember.guild.id}.channel`)
if (!onoff) return;
if(!channel) return;


if (onoff == true) {
  let logs = oldMember.guild.channels.cache.get(channel)
 
        var membros = [oldMember.nickname, newMember];
   
        if(membros[0] == null)
        {
          membros[0] == oldMember.user.username;
        }
        if(membros[1] == null)
        {
          membros[1] = newMember.user.username;
        }
   
       
        if(oldMember.nickname != newMember.nickname)
        {

         let logEmbed = new Discord.MessageEmbed()
       .setColor("RANDOM")
       .setAuthor("Membros | Apelido")
       .setDescription(`Autor: <@${newMember.user.id}>`)
       .addField("Antes", `> **${membros[0]}**`)
       .addField("Depois", `> **${membros[1]}**`)
       .setTimestamp()
   
       logs.send(logEmbed)

        }
  }
} catch(e) {
    return;
}
 }