const Discord = require('discord.js')
const db = require('quick.db')

module.exports = async(client, message) => {

  try {

  let onoff = db.get(`modlog.${message.guild.id}.on`)
  let channel = db.get(`modlog.${message.guild.id}.channel`)
  if (!onoff) return;
  if(!channel) return;

  if (onoff == true) {
    let logs = message.guild.channels.cache.get(channel)

        if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) { 
          console.log('O canal de logs não existe e tentou criar o canal, mas não tenho permissões')
        }  
        const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
        let user = ""
          if (entry.extra.channel.id === message.channel.id
            && (entry.target.id === message.author.id)
            && (entry.createdTimestamp > (Date.now() - 5000))
            && (entry.extra.count >= 1)) {
          user = entry.executor.id
        } else { 
          user = message.author.id
        }

        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(` | Mensagem Apagada`)
          .setDescription(`**Mensagem de:** <@${message.author.id}>\n**Apaga por:** <@${entry.executor.id}>\n**Canal:** <#${message.channel.id}>`)
          .addField("Mensagem:", `> **${message.content}**`) 
          .setTimestamp()
          logs.send(embed)
        
        }
      } catch(e) {
        return;
      }
      }