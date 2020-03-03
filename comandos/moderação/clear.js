const Discord = require('discord.js')
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    
        const deleteCount = parseInt(args[0], 10);
        
        if(!message.member.hasPermission("MANAGE_MESSAGES") || !message.guild.owner) return message.channel.send("Você não tem permissão")
       
    if(!message.guild.me.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("Você não tem permissão de Gerenciar Mensagens")
    
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");
        
        
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`Não foi possível excluir as mensagens devido a: ${error}`));

      message.channel.send(`Foi Limpado __${deleteCount}__ Mensagens!`)

      let onoff = db.get(`modlog.${message.guild.id}.on`)
      let channel = db.get(`modlog.${message.guild.id}.channel`)
      if (!onoff) return;
      if(!channel) return;

      if (onoff == true) {


        let logs = message.guild.channels.get(channel)

        let embed = new Discord.RichEmbed()
        
        .setAuthor(`🔨 | Mensagens deletadas em massa`)
        .setColor(`RANDOM`)
        .setDescription(`**Autor: <@${message.author.id}>\n**Canal:** <#${message.channel.id}>\n**Deletadas:** ${deleteCount}`)
      }
      }


      module.exports.help = {
        name: "clear",
        aliases: ["limpar", "purge"]
    }
