const Discord = require("discord.js")
const db = require("quick.db")

module.exports= function (client, canal) {

    try {

        let onoff = db.get(`modlog.${canal.guild.id}.on`)
      let channel = db.get(`modlog.${canal.guild.id}.channel`)
      if (!onoff) return;
      if(!channel) return;
      
      
      if (onoff == true) {


        let logs = canal.guild.channels.cache.get(channel)

        let embed = new Discord.RichEmbed()

        .setAuthor("Canais | Canal Deletado")
        .setDescription(` deletou o canal ${canal.name}.\nID: **${canal.id}** | Tipo: ${canal.type}`)
        .setColor("RANDOM")
        .setTimestamp()

        logs.send(embed)
      }

    }catch(e) {
        return;
    }
}