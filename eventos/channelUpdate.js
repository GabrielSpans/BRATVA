const Discord = require('discord.js')
const db = require("quick.db")

module.exports = function(client, oldChannel, canal) {

/*try {

        let onoff = db.get(`modlog.${canal.guild.id}.on`)
      let channel = db.get(`modlog.${canal.guild.id}.channel`)
      if (!onoff) return;
      if(!channel) return;
      
      
      if (onoff == true) {

        let logs = canal.guild.channels.get(channel)

        let embed = new Discord.RichEmbed()

        .setAuthor("Canais | Canal Editado")
        .setDescription(`${client.username} editou o canal <#${canal.id}>\nID: **${canal.id}** | tipo: ${canal.type}\nEdições:\nnome: ${oldChannel.name}>${canal.name}`)

        logs.send(embed)
      }

    }catch(e) {
        return console.error(e)
    }*/
}