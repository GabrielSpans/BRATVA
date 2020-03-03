const Discord = require('discord.js')
const db = require('quick.db')

module.exports = async (client, oldMessage, newMessage) => {

  try {

  let onoff = db.get(`modlog.${oldMessage.guild.id}.on`)
  let channel = db.get(`modlog.${oldMessage.guild.id}.channel`)
  if (!onoff) return;
  if(!channel) return;

  if (onoff == true) {
    let logs = oldMessage.guild.channels.get(channel)

        if(oldMessage.content === newMessage.content){
          return;
        }
      
          let logEmbed = new Discord.RichEmbed()
          .setThumbnail(oldMessage.author.avatarURL)
          .setColor("ff756")
          .setAuthor(" | Mensagem editada")
          .setDescription(`Autor: <@${oldMessage.author.id}>\nCanal: <#${oldMessage.channel.id}>`)
          .addField("De", '> ' + oldMessage.content, true)
          .addField("Para",'> ' + newMessage.content, true)
          .setTimestamp()
      
          logs.send(logEmbed);
          
  }
} catch(e) {
  return;
}
}